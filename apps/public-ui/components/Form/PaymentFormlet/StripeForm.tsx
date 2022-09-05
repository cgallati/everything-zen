import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { SubmitButton } from '../styles';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Paragraph } from '@everything-zen/ui-components';
import { PaymentForm } from './styles';
import { StripePaymentElementChangeEvent } from '@stripe/stripe-js';

export const StripeForm: React.FC<{
  submitPayload: URLSearchParams;
  setIsReady: Dispatch<SetStateAction<boolean>>;
}> = ({ submitPayload, setIsReady }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleChange = async (event: StripePaymentElementChangeEvent) => {
    setDisabled(!event.complete);
  };

  const handleSubmit = async (event) => {
    console.log(submitPayload.toString());
    event.stopPropagation();
    setProcessing(true);
    setDisabled(true);
    const { error } = await stripe.confirmSetup({
      elements,
      redirect: 'always',
      confirmParams: {
        return_url: `${
          // does not work on localhost without tunneling a port out
          window.location.href
        }/submit/?${submitPayload.toString()}`,
      },
    });
    error && setError(error.message);
  };

  return (
    <PaymentForm onSubmit={handleSubmit}>
      <PaymentElement
        onReady={(element) => {
          console.log({ element });
          setIsReady(true);
        }}
        onChange={handleChange}
      />
      <SubmitButton
        type="submit"
        value="COMPLETE RESERVATION"
        disabled={disabled}
      />
      {processing && <Paragraph>Processing....</Paragraph>}
      {error && <Paragraph>{error}</Paragraph>}
    </PaymentForm>
  );
};
