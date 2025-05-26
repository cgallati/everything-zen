import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json('use GET');
    return;
  }

  try {
    // Get all active products
    const products = await stripe.products.list({
      active: true,
      limit: 100,
    });

    // Get prices for each product
    const productsWithPrices = await Promise.all(
      products.data.map(async (product) => {
        const prices = await stripe.prices.list({
          product: product.id,
          active: true,
        });

        // Get the default price (first active price)
        const defaultPrice = prices.data[0];

        return {
          id: product.id,
          name: product.name,
          description: product.description,
          price: defaultPrice ? {
            id: defaultPrice.id,
            amount: defaultPrice.unit_amount,
            currency: defaultPrice.currency,
          } : null,
        };
      })
    );

    // Filter out products without prices and the original tip-only products
    const tipOnlyProductIds = ['prod_SNrpXYBOGxGDy0', 'prod_SNqxTYypsmDqYe'];
    const validProducts = productsWithPrices.filter(
      (product) => product.price && !tipOnlyProductIds.includes(product.id)
    );

    res.status(200).json(validProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: error.message });
  }
};