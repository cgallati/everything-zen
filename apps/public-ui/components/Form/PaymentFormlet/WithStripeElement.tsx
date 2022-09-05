import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ReactElement } from 'react';

const stripePromise = loadStripe(
  'pk_test_51LEZWKHtNq32I60wP9HTIh2gTjHJpBufxd06EU6GsxxXOT08OgpZ4UMdkHzjmPdVf540hrkqTWQWx9SOP8H0zW9R00ynQmR9Ll'
);

export const WithStripeElement: React.FC<{
  secret: string;
  children: ReactElement;
}> = ({ secret, children }) => {
  const stripeOptions = {
    clientSecret: secret,
    fonts: [
      {
        cssSrc:
          'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap',
      },
    ],
    appearance: {
      variables: {
        fontFamily: 'Source Sans Pro',
        borderRadius: '3px',
        colorPrimary: '#00263a',
      },
    },
  };

  if (!secret) return children;

  return (
    <Elements stripe={stripePromise} options={stripeOptions}>
      {children}
    </Elements>
  );
};
