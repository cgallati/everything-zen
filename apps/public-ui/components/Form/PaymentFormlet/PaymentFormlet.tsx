import React from 'react';
import {
  BackArrow,
  BackButton,
  BackText,
  Formlet,
  HR,
  HeavyHeader,
} from '../styles';
import { StripeForm } from './StripeForm';
import { DisclaimerText, ObscuringLoader } from './styles';
import { WithStripeElement } from './WithStripeElement';
import useSWR from 'swr';

export type PaymentFormletProps = {
  submitPayload: URLSearchParams;
  goBack: () => void;
  name: string;
  phone: string;
  email: string;
};

export const PaymentFormlet: React.FC<PaymentFormletProps> = ({
  submitPayload,
  goBack,
  name,
  phone,
  email,
}) => {
  const { data } = useSWR('api/paymentIntent', () =>
    fetch('api/paymentIntent', {
      method: 'PUT',
      body: JSON.stringify({
        name,
        phone,
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
  );
  const secret = data?.secret;
  return (
    <WithStripeElement secret={secret}>
      <Formlet>
        <BackButton onClick={() => goBack()}>
          <BackArrow src={'/leftarrow.svg'} alt={'back arrow'} />
          <BackText>CHOOSE A DIFFERENT DATE OR TIME</BackText>
        </BackButton>
        {!secret && <ObscuringLoader />}
        {secret && (
          <>
            <HR />
            <br />
            <HeavyHeader>HOLD YOUR RESERVATION</HeavyHeader>
            <DisclaimerText>
              {/* eslint-disable react/no-unescaped-entities */}
              To hold your charter reservation, please submit a valid payment
              method. You will not be charged until after your charter and will
              be able to provide an alternate payment method at that time.
            </DisclaimerText>
            <HeavyHeader>CANCELLATION POLICY</HeavyHeader>
            <DisclaimerText>
              Cancellations can be made up until 24 hours before your charter.
              Failure to cancel before this time will result in the full charter
              amount being charged to the payment method on file.
            </DisclaimerText>
            <br />
            <br />
            <StripeForm submitPayload={submitPayload} />
          </>
        )}
      </Formlet>
    </WithStripeElement>
  );
};
