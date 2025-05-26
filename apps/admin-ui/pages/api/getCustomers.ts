import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import prisma from '@everything-zen/data-access';

export interface CustomerWithPhone extends Stripe.Customer {
  phone_from_db?: string;
}

const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: '2023-10-16',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json('use GET');
    return;
  }

  try {
    // Get all Stripe customers
    const customers = await stripe.customers.list({
      limit: 100, // Adjust as needed
    });

    // Get phone numbers from database for each customer email
    const customersWithPhones: CustomerWithPhone[] = await Promise.all(
      customers.data.map(async (customer) => {
        let phoneFromDb = customer.phone;

        if (customer.email) {
          // Look up phone number in database
          const guestRecord = await prisma.guest.findFirst({
            where: {
              email: customer.email,
            },
            select: {
              phone: true,
            },
          });

          if (guestRecord?.phone) {
            phoneFromDb = guestRecord.phone;
          }
        }

        return {
          ...customer,
          phone_from_db: phoneFromDb,
        };
      })
    );

    // Filter out customers without email or name
    const validCustomers = customersWithPhones.filter(
      (customer) => customer.email && customer.name
    );

    res.status(200).json(validCustomers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ error: error.message });
  }
};
