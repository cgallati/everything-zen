import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

export interface CreatePaymentLinkInput {
  customerId: string; // Stripe customer ID
  productId: string; // Stripe product ID
  priceId: string; // Stripe price ID
}

const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: '2024-06-20',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json('use POST');
    return;
  }

  const {
    customerId,
    productId,
    priceId
  }: CreatePaymentLinkInput = req.body;

  try {
    // Update all existing payment methods for this customer to allow redisplay
    console.log(`Updating payment methods for customer ${customerId} to allow redisplay...`);

    try {
      const existingPaymentMethods = await stripe.paymentMethods.list({
        customer: customerId,
        type: 'card',
        limit: 100,
      });

      for (const pm of existingPaymentMethods.data) {
        if (pm.allow_redisplay !== 'always') {
          await stripe.paymentMethods.update(pm.id, {
            allow_redisplay: 'always',
          });
          console.log(`Updated payment method ${pm.id} to allow redisplay`);
        }
      }

      console.log(`Updated ${existingPaymentMethods.data.length} payment methods for customer ${customerId}`);
    } catch (pmError) {
      console.warn('Warning: Could not update existing payment methods:', pmError.message);
      // Continue with checkout session creation even if this fails
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://everythingzensailingcharters.com',
      cancel_url: 'https://everythingzensailingcharters.com',
      payment_intent_data: {
        setup_future_usage: 'off_session',
      },
    });

    res.status(200).json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
};
