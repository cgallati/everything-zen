import React, { useState } from 'react';
import {
  CalendarFormlet,
  CalendarFormletProps,
} from './CalendarFormlet/CalendarFormlet';
import { InfoFormlet, InfoFormletProps } from './InfoFormlet/InfoFormlet';
import { Success } from './Success';
import { Loading } from './Loading';
import { Availability, Month, PartyType } from '@everything-zen/ui-components';
// import { analyticsEvent } from '../../../lib/analytics';
import { addMinutes, format } from 'date-fns';
import { ErrorMessage } from './Error';
import {
  PaymentFormlet,
  PaymentFormletProps,
} from './PaymentFormlet/PaymentFormlet';

// the order matters, because of advanceForm and goBack
export enum FormState {
  CALENDAR,
  INFO,
  PAYMENT,
  SUBMITTING,
  SUCCESS,
  ERROR,
}

type FormProps = {
  availability: Month[];
};

export const Form: React.FC<FormProps> = ({ availability }) => {
  const [formState, setFormState] = useState<FormState>(FormState.CALENDAR);

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [partySize, setPartySize] = React.useState<number | 'default'>(
    'default'
  );
  const [partyType, setPartyType] = React.useState<PartyType | 'default'>(
    'default'
  );

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedAvail, setSelectedAvail] = useState<Availability | null>(null);

  /* info form handlers */
  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setName(e.target.value);
  const handlePhoneChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setPhone(e.target.value);
  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.target.value);

  /* advance / back handlers */
  const advanceForm = () => {
    const currentIndex = Object.keys(FormState).indexOf(formState.toString());
    setFormState(FormState[FormState[currentIndex + 1]]);
  };
  const goBack = () => {
    const currentIndex = Object.keys(FormState).indexOf(formState.toString());
    setFormState(FormState[FormState[currentIndex - 1]]);
  };

  const submitForm: React.FormEventHandler = async (e) => {
    e.stopPropagation();
    if (!selectedAvail) {
      return;
    }

    setFormState(FormState.SUBMITTING);
    const { start, length } = selectedAvail;
    await fetch('/api/submitReservation', {
      method: 'PUT',
      body: JSON.stringify({
        data: {
          avail: selectedAvail,
          guest: { name, phone, email },
          partySize,
          partyType,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw new Error('Failure submitting reservation.');
      })
      .then(() => {
        fetch('/api/mail/sendConfirmation', {
          method: 'PUT',
          body: JSON.stringify({
            to: email,
            date: format(start, 'MMMM do, yyyy'),
            timeRange:
              format(start, 'h:mm') +
              ' - ' +
              format(addMinutes(start, length), 'h:mm'),
          }),
        });
      })
      // .then(() =>
      //   analyticsEvent({
      //     action: 'purchase',
      //     params: {
      //       event_label: 'reserve-charter',
      //     },
      //   })
      // )
      .then(() => setFormState(FormState.SUCCESS))
      .catch(() => setFormState(FormState.ERROR));
  };

  const calFormletProps: CalendarFormletProps = {
    availability,
    selectedDate,
    setSelectedDate,
    advanceForm,
    setSelectedAvail,
  };

  const infoFormletProps: InfoFormletProps = {
    name,
    phone,
    email,
    partySize,
    partyType,
    handleNameChange,
    handlePhoneChange,
    handleEmailChange,
    setPartySize,
    setPartyType,
    advanceForm,
    goBack,
    selectedAvail: selectedAvail as Availability,
  };

  const paymentFormletProps: PaymentFormletProps = {
    submitForm,
    goBack,
    name,
    phone,
    email,
    selectedAvail: selectedAvail as Availability,
  };

  const ActiveFormlet = () => {
    switch (formState) {
      case FormState.CALENDAR:
        return <CalendarFormlet {...calFormletProps} />;
      case FormState.INFO:
        return <InfoFormlet {...infoFormletProps} />;
      case FormState.PAYMENT:
        return <PaymentFormlet {...paymentFormletProps} />;
      case FormState.SUBMITTING:
        return <Loading />;
      case FormState.SUCCESS:
        return <Success />;
      case FormState.ERROR:
        return <ErrorMessage />;
      default:
        return <h1>INVALID STATE</h1>;
    }
  };

  return ActiveFormlet();
};
