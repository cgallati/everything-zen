#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load environment variables from .env file manually
function loadEnv() {
  try {
    const envPath = path.join(__dirname, '..', '.env');
    const envContent = fs.readFileSync(envPath, 'utf8');
    
    envContent.split('\n').forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=').trim();
          process.env[key.trim()] = value;
        }
      }
    });
  } catch (error) {
    console.log('⚠️  Could not load .env file, using existing environment variables');
  }
}

// Load environment variables
loadEnv();

const Stripe = require('stripe');

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

async function updatePaymentMethods(dryRun = false) {
  if (dryRun) {
    console.log('🔍 Starting payment method analysis (DRY RUN - no changes will be made)...');
  } else {
    console.log('🔄 Starting payment method update...');
  }
  
  try {
    let totalUpdated = 0;
    let totalProcessed = 0;
    let customersProcessed = 0;

    // First, get all customers
    console.log('👥 Fetching customers...');
    let hasMoreCustomers = true;
    let customerStartingAfter = null;

    while (hasMoreCustomers) {
      const customerParams = {
        limit: 100,
      };
      
      if (customerStartingAfter) {
        customerParams.starting_after = customerStartingAfter;
      }

      const customers = await stripe.customers.list(customerParams);
      customersProcessed += customers.data.length;
      
      console.log(`📦 Processing ${customers.data.length} customers (${customersProcessed} total)...`);

      // For each customer, get their payment methods
      for (const customer of customers.data) {
        try {
          const paymentMethods = await stripe.paymentMethods.list({
            customer: customer.id,
            type: 'card',
            limit: 100,
          });

          totalProcessed += paymentMethods.data.length;

          // Update each payment method
          for (const pm of paymentMethods.data) {
            try {
              // Check if already set to allow redisplay
              if (pm.allow_redisplay === 'always') {
                if (dryRun) {
                  console.log(`ℹ️  Payment method ${pm.id} (customer: ${customer.email || customer.id}) already allows redisplay`);
                } else {
                  console.log(`✅ Payment method ${pm.id} (customer: ${customer.email || customer.id}) already allows redisplay`);
                }
                continue;
              }

              if (dryRun) {
                // In dry run mode, just log what would be updated
                totalUpdated++;
                console.log(`🔍 WOULD UPDATE: Payment method ${pm.id} for customer ${customer.email || customer.id} (${totalUpdated}/${totalProcessed})`);
                console.log(`   Current allow_redisplay: ${pm.allow_redisplay || 'undefined'}`);
                console.log(`   Would set to: always`);
              } else {
                // Actually update the payment method
                await stripe.paymentMethods.update(pm.id, {
                  allow_redisplay: 'always',
                });
                
                totalUpdated++;
                console.log(`✅ Updated payment method ${pm.id} for customer ${customer.email || customer.id} (${totalUpdated}/${totalProcessed})`);
                
                // Small delay to avoid rate limiting
                await new Promise(resolve => setTimeout(resolve, 50));
              }
              
            } catch (error) {
              console.error(`❌ Error ${dryRun ? 'analyzing' : 'updating'} payment method ${pm.id}:`, error.message);
            }
          }
          
        } catch (error) {
          console.error(`❌ Error fetching payment methods for customer ${customer.id}:`, error.message);
        }
      }

      // Check if there are more customers
      hasMoreCustomers = customers.has_more;
      if (hasMoreCustomers && customers.data.length > 0) {
        customerStartingAfter = customers.data[customers.data.length - 1].id;
      }
    }

    if (dryRun) {
      console.log('\n🔍 Analysis complete!');
      console.log(`👥 Total customers processed: ${customersProcessed}`);
      console.log(`📊 Total payment methods analyzed: ${totalProcessed}`);
      console.log(`🔄 Payment methods that WOULD be updated: ${totalUpdated}`);
      console.log(`✅ Already up to date: ${totalProcessed - totalUpdated}`);
      
      if (totalUpdated > 0) {
        console.log('\n💡 To actually make these changes, run:');
        console.log('   npm run stripe:update-payment-methods');
      }
    } else {
      console.log('\n🎉 Update complete!');
      console.log(`👥 Total customers processed: ${customersProcessed}`);
      console.log(`📊 Total payment methods processed: ${totalProcessed}`);
      console.log(`✅ Total payment methods updated: ${totalUpdated}`);
      console.log(`⏭️  Already up to date: ${totalProcessed - totalUpdated}`);
    }

    if (totalProcessed === 0) {
      console.log('\n💡 No payment methods found. This could mean:');
      console.log('   • Customers haven\'t saved any payment methods yet');
      console.log('   • Payment methods are stored differently in your Stripe account');
      console.log('   • You might be using a different Stripe account/environment');
    }

  } catch (error) {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  }
}

// Check if Stripe key is provided
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ Error: STRIPE_SECRET_KEY environment variable is required');
  console.log('💡 Usage: STRIPE_SECRET_KEY=sk_... node scripts/update-payment-methods.js');
  process.exit(1);
}

// Check command line arguments for dry run mode
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run') || args.includes('-d');

if (dryRun) {
  console.log('🔍 Running in DRY RUN mode - no changes will be made\n');
}

// Run the script
updatePaymentMethods(dryRun);