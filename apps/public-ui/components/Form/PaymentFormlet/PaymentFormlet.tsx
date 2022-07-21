import React from 'react';
import {
  BackArrow,
  BackButton,
  BackText,
  Formlet,
  HR,
  SubmitButton,
} from './styles';
import { Availability } from '@everything-zen/ui-components';
import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export type PaymentFormletProps = {
  submitForm: React.FormEventHandler;
  goBack: () => void;
  selectedAvail: Availability;
};

const stripePromise = loadStripe(
  'pk_test_51LEZWKHtNq32I60wP9...OP8H0zW9R00ynQmR9Ll'
);

export const PaymentFormlet: React.FC<PaymentFormletProps> = ({
  submitForm,
  goBack,
  selectedAvail,
}) => {
  const submitDisabled = true;
  const options = {
    // passing the client secret obtained in step 2
    clientSecret: '{{CLIENT_SECRET}}',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  return (
    <Formlet>
      <BackButton onClick={() => goBack()}>
        <BackArrow src={'/leftarrow.svg'} alt={'back arrow'} />
        <BackText>CHOOSE A DIFFERENT DATE OR TIME</BackText>
      </BackButton>
      <HR />
      <form onSubmit={submitForm}>
        <Elements stripe={stripePromise} options={options}>
          <form>
            <PaymentElement />
            <button>Submit</button>
          </form>
        </Elements>
        <SubmitButton
          type="submit"
          value="COMPLETE RESERVATION"
          disabled={submitDisabled}
        />
      </form>
    </Formlet>
  );
};

PaymentFormlet.displayName = 'PaymentFormlet';
