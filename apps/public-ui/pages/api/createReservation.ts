import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51LEZWKHtNq32I60wIJ...QIr3DAI4d00udTyHoSo', {
  apiVersion: '2020-08-27',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const customer = await stripe.customers.create({
    name: 'Test',
  });

  res.status(200).json(customer);
  return;
};
