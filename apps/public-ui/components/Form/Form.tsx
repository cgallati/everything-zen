import React, { useState } from 'react';
import {
  CalendarFormlet,
  CalendarFormletProps,
} from './CalendarFormlet/CalendarFormlet';
import { InfoFormlet, InfoFormletProps } from './InfoFormlet/InfoFormlet';
import { Success } from './Success';
import { Loading } from './Loading';
import { Availability, Month, PartyType } from '@everything-zen/ui-components';
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

  const [secret, setSecret] = useState<string>('');

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

  const submitPayload = new URLSearchParams({
    name,
    phone,
    email,
    avail: selectedAvail?.id.toString(),
    partySize: partySize?.toString(),
    partyType: partyType?.toString(),
  });

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
    submitPayload,
    goBack,
    name,
    phone,
    email,
    secret,
    setSecret
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
