import React from 'react';
import {
  BackArrow,
  BackButton,
  BackText,
  Formlet,
  HR,
  Prompt,
} from '../styles';
import { Availability } from '@everything-zen/ui-components';
import { usePaymentIntent } from '../../../hooks/usePaymentIntent';
import { StripeForm } from './StripeForm';

export type PaymentFormletProps = {
  submitForm: React.FormEventHandler;
  goBack: () => void;
  name: string;
  phone: string;
  email: string;
  selectedAvail: Availability;
};

export const PaymentFormlet: React.FC<PaymentFormletProps> = ({
  submitForm,
  goBack,
  selectedAvail,
  name,
  phone,
  email,
}) => {
  const { secret, error } = usePaymentIntent(name, phone, email, selectedAvail);
  const stripeOptions = {
    clientSecret: secret,
    appearance: {
      /*...*/
    },
  };
  if (error) return <p> error</p>;

  return (
    <Formlet>
      <BackButton onClick={() => goBack()}>
        <BackArrow src={'/leftarrow.svg'} alt={'back arrow'} />
        <BackText>CHOOSE A DIFFERENT DATE OR TIME</BackText>
      </BackButton>
      <HR />
      <Prompt>Hold your res</Prompt>
      <form onSubmit={submitForm}>
        <StripeForm options={stripeOptions} />
      </form>
    </Formlet>
  );
};

PaymentFormlet.displayName = 'PaymentFormlet';
