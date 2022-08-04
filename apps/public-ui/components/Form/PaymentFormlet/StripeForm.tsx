import { PaymentElement } from '@stripe/react-stripe-js';
import { SubmitButton } from '../styles';
import React from 'react';

export const StripeForm: React.FC<{
  setIsReady: () => void;
}> = ({ setIsReady }) => {
  return (
    <>
      <PaymentElement onReady={setIsReady} />
      <SubmitButton
        type="submit"
        value="COMPLETE RESERVATION"
        disabled={true}
      />
    </>
  );
};
