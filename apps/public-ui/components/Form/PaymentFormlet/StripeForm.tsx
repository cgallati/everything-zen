import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { SubmitButton } from '../styles';
import React, { useState } from 'react';
import { Paragraph } from '@everything-zen/ui-components';
import { PaymentForm } from './styles';
import { StripePaymentElementChangeEvent } from '@stripe/stripe-js';

export const StripeForm: React.FC<{
  submitPayload: URLSearchParams;
  secret: string;
}> = ({ submitPayload, secret }) => {
  const RETURN_HOST =
    window?.location.hostname === 'localhost'
      ? 'google.com'
      : 'ezsailingcharters.com';
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleChange = async (event: StripePaymentElementChangeEvent) => {
    setDisabled(!event.complete);
  };

  const handleSubmit = async (event) => {
    event.stopPropagation();
    setDisabled(true);
    const { error } = await stripe.confirmSetup({
      elements,
      redirect: 'always',
      confirmParams: {
        return_url: `https://${RETURN_HOST}/reserve/submit/?${submitPayload.toString()}`,
      },
    });
    error && setError(error.message);
  };

  return (
    <PaymentForm>
      <PaymentElement onChange={handleChange} />
      <SubmitButton
        type="submit"
        value="COMPLETE RESERVATION"
        disabled={disabled}
        onClick={handleSubmit}
      />
      {error && <Paragraph>{error}</Paragraph>}
    </PaymentForm>
  );
};
