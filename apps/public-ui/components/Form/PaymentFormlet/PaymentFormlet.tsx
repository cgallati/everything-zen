import React, { Dispatch, SetStateAction, useState } from 'react';
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
  secret: string;
  setSecret: Dispatch<SetStateAction<string>>;
};

export const PaymentFormlet: React.FC<PaymentFormletProps> = ({
  submitPayload,
  goBack,
  name,
  phone,
  email,
  secret,
  setSecret,
}) => {
  const shouldFetch = !secret;
  useSWR(shouldFetch && 'api/setupIntent', () =>
    fetch('api/setupIntent', {
      method: 'PUT',
      body: JSON.stringify({
        name,
        phone,
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSecret(data.secret);
      })
  );
  return (
    <WithStripeElement secret={secret}>
      <Formlet>
        <BackButton onClick={() => goBack()}>
          <BackArrow src={'/leftarrow.svg'} alt={'back arrow'} />
          <BackText>EDIT CHARTER</BackText>
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
              be able to provide an alternate payment method at that time if you
              wish.
            </DisclaimerText>
            <HeavyHeader>CANCELLATION POLICY</HeavyHeader>
            <DisclaimerText>
              Charter guest may cancel up to 48 hours before the charter at no
              cost. Cancellations by the guest with less than 48 hours notice
              will result in the full charter amount being charged to the
              payment method on file. Cancellations made by the Captain for
              weather reasons will not result in a charge to the customer.
            </DisclaimerText>
            <br />
            <br />
            <StripeForm submitPayload={submitPayload} secret={secret} />
          </>
        )}
      </Formlet>
    </WithStripeElement>
  );
};
