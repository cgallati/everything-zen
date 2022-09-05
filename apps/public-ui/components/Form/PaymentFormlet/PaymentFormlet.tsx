import React, { useState } from 'react';
import {
  BackArrow,
  BackButton,
  BackText,
  Formlet,
  HR,
  HeavyHeader,
} from '../styles';
import {
  Availability,
  Paragraph,
  Subheading,
} from '@everything-zen/ui-components';
import { usePaymentIntent } from '../../../hooks/usePaymentIntent';
import { StripeForm } from './StripeForm';
import { DisclaimerText, ObscuringLoader, PolicyHeading } from './styles';
import { WithStripeElement } from './WithStripeElement';

export type PaymentFormletProps = {
  submitPayload: URLSearchParams;
  goBack: () => void;
  name: string;
  phone: string;
  email: string;
  selectedAvail: Availability;
};

export const PaymentFormlet: React.FC<PaymentFormletProps> = ({
  submitPayload,
  goBack,
  selectedAvail,
  name,
  phone,
  email,
}) => {
  const { secret } = usePaymentIntent(name, phone, email, selectedAvail);
  const [isReady, setIsReady] = useState<boolean>(false);
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
            <StripeForm setIsReady={setIsReady} submitPayload={submitPayload} />
          </>
        )}
      </Formlet>
    </WithStripeElement>
  );
};
