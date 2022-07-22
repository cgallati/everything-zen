import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { SubmitButton } from '../styles';
import React from 'react';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Loading } from '../Loading';

const stripePromise = loadStripe(
  'pk_test_51LEZWKHtNq32I60wP9HTIh2gTjHJpBufxd06EU6GsxxXOT08OgpZ4UMdkHzjmPdVf540hrkqTWQWx9SOP8H0zW9R00ynQmR9Ll'
);

export const StripeForm: React.FC<{
  options: StripeElementsOptions;
}> = ({ options }) => {
  if (!options.clientSecret) return <Loading />;

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentElement />
      <SubmitButton
        type="submit"
        value="COMPLETE RESERVATION"
        disabled={true}
      />
    </Elements>
  );
};
