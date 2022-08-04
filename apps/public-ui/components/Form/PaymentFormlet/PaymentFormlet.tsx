import React, { useState } from 'react';
import {
  BackArrow,
  BackButton,
  BackText,
  Formlet,
  HR,
  HeavyHeader,
} from '../styles';
import { Availability, Paragraph } from '@everything-zen/ui-components';
import { usePaymentIntent } from '../../../hooks/usePaymentIntent';
import { StripeForm } from './StripeForm';
import { ObscuringLoader, PaymentForm } from './styles';
import { WithStripeElement } from './WithStripeElement';

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
  const [isReady, setIsReady] = useState<boolean>(false);
  const { secret } = usePaymentIntent(name, phone, email, selectedAvail);

  return (
    <WithStripeElement secret={secret}>
      <Formlet>
        <BackButton onClick={() => goBack()}>
          <BackArrow src={'/leftarrow.svg'} alt={'back arrow'} />
          <BackText>CHOOSE A DIFFERENT DATE OR TIME</BackText>
        </BackButton>
        <HR />
        <HeavyHeader>HOLD YOUR RESERVATION</HeavyHeader>
        <br />
        <Paragraph>
          {/* eslint-disable react/no-unescaped-entities */}
          To hold your charter reservation, please submit a valid payment
          method. You will not be charged until after your charter and will be
          able to provide an alternate payment method at that time.
          <br />
          Cancellations can be made up until 24 hours before your charter.
          Failure to cancel before this time will result in the full charter
          amount being charged to the payment method on file.
        </Paragraph>
        <PaymentForm onSubmit={submitForm}>
          {!isReady && <ObscuringLoader />}
          {secret && <StripeForm setIsReady={() => setIsReady(true)} />}
        </PaymentForm>
      </Formlet>
    </WithStripeElement>
  );
};

PaymentFormlet.displayName = 'PaymentFormlet';
