import { NextApiRequest, NextApiResponse } from 'next';

import Stripe from 'stripe';
import { PaymentIntentInput } from '../../hooks/usePaymentIntent';

const stripe = new Stripe(process.env.STRIPE_KEY, {
  apiVersion: '2020-08-27',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PUT') {
    res.status(405).json('use PUT');
    return;
  }
  const { name, email, phone, amount, description }: PaymentIntentInput =
    req.body;
  let paymentIntent;
  try {
    paymentIntent = await stripe.customers
      .create({ name, email, phone })
      .then(
        async (customer) =>
          await stripe.paymentIntents.create({
            customer: customer.id,
            setup_future_usage: 'off_session',
            amount,
            currency: 'usd',
            automatic_payment_methods: {
              enabled: true,
            },
            description,
            receipt_email: customer.email,
          })
      )
      .catch((error) => {
        console.error('Error creating payment intent: ' + error.message, error);
        res.status(500).json('Error creating payment intent: ' + error.message);
        throw error;
      });
  } catch {
    return;
  }

  res.status(201).json(JSON.stringify({ secret: paymentIntent.client_secret }));
  return;
};
