import { NextApiRequest, NextApiResponse } from 'next';

import Stripe from 'stripe';
import { PaymentIntentInput } from '../../hooks/usePaymentIntent';

const stripe = new Stripe(process.env.STRIPE_KEY, {
  apiVersion: '2020-08-27',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Handle request
  if (req.method !== 'PUT') {
    res.status(405).json('use PUT');
    return;
  }
  const { name, email, phone, amount, description }: PaymentIntentInput =
    req.body;

  // Query existing customers
  const { data: customers } = await stripe.customers.search({
    query: `email:"${email}"`,
  });
  console.log(customers);
  let customer = customers[0];
  let intent;

  if (customer) {
    // if customer is known, intent might be too
    const intents = await stripe.paymentIntents.search({
      query: `customer:"${customer.id}"`,
    });
    intent = intents[0];
  } else {
    // create new customer
    customer = await stripe.customers.create({ name, email, phone });
  }

  // create or update, depending on if we found an intent
  intent = intent
    ? await stripe.paymentIntents.update(intent.id, {
        customer: customer.id,
        setup_future_usage: 'off_session',
        amount,
        currency: 'usd',
        description,
        receipt_email: customer.email,
      })
    : await stripe.paymentIntents
        .create({
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
        .catch((error) => {
          console.error(
            'Error creating or updating payment intent: ' + error.message,
            error
          );
          res
            .status(500)
            .json(
              'Error creating or updating payment intent: ' + error.message
            );
          throw error;
        });

  res.status(201).json(JSON.stringify({ secret: intent.client_secret }));
  return;
};
