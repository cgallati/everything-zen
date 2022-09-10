import React, { useState } from 'react';

import {
  Availability,
  Calendar,
  CharterTimeButtons,
  Formlet,
  Month,
  PartyType,
} from '@everything-zen/ui-components';

import {
  Heading,
  SubHeading,
} from '../../../public-ui/components/Form/CalendarFormlet/styles';
import { addMinutes, format, getDate } from 'date-fns';
import {
  HeavyHeader,
  HR,
  SubmitButton,
  SubtleHeader,
} from '../../../public-ui/components/Form/styles';
import {
  Answer,
  ItemLine,
  Prompt,
  ReservationDate,
  ReservationItem,
  TextInput,
  Time,
} from './styles';

type FormProps = {
  availability: Month[];
};

export const Form: React.FC<FormProps> = ({ availability }) => {
  const [submitText, setSubmitText] = React.useState('SUBMIT');
  const [name, setName] = React.useState('OFF');
  const [phone, setPhone] = React.useState('8436709145');
  const [email, setEmail] = React.useState('tggallati@gmail.com');
  const [partySize, setPartySize] = React.useState<number>(1);
  const [partyType, setPartyType] = React.useState<PartyType>(PartyType.Other);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedAvail, setSelectedAvail] = useState<Availability | null>(null);
  const [monthIdx, setMonthIdx] = useState<number>(0);

  /* info form handlers */
  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
    setSubmitText('SUBMIT');
  };
  const handlePhoneChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPhone(e.target.value);
    setSubmitText('SUBMIT');
  };
  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    setSubmitText('SUBMIT');
  };

  const submitDisabled = !name || !phone || !email || submitText === 'ERROR';

  const { start, length, cost } = selectedAvail || {
    start: new Date(),
    length: 150,
    cost: undefined,
  };
  const [startTimeString, endTimeString] = [
    format(start, 'h:mm'),
    format(addMinutes(start, length), 'h:mm'),
  ];
  const cruiseTimeStrings = [
    selectedAvail?.type,
    startTimeString + ' - ' + endTimeString,
  ];
  const partySizeOptions = [1, 2, 3, 4, 5, 6];

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setSelectedAvail(undefined);
  };

  const submitForm: React.FormEventHandler = async (e) => {
    e.stopPropagation();
    setSubmitText('SUBMITTING');
    if (!selectedAvail) {
      return;
    }

    // setFormState(FormState.SUBMITTING);
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
      .then(() => window.location.reload())
      .catch(() => setSubmitText('ERROR'));
  };

  return (
    <Formlet>
      <Heading>RESERVE A CHARTER</Heading>
      <SubHeading>CREATE RESERVATIONS AND TIME OFF</SubHeading>
      <Calendar
        months={availability}
        idx={monthIdx}
        setIdx={setMonthIdx}
        selectedDate={selectedDate}
        setSelectedDate={handleDateChange}
      />
      <CharterTimeButtons
        availDay={
          availability[monthIdx].days[getDate(selectedDate) - 1]?.avails || []
        }
        handleCharterSelection={setSelectedAvail}
      />
      <HR />
      {selectedAvail && (
        <>
          <SubtleHeader>YOU ARE RESERVING</SubtleHeader>
          <ItemLine>
            <ReservationItem>
              {length / 60} HOUR {cruiseTimeStrings[0]} CRUISE
            </ReservationItem>
            <ReservationItem>${cost}</ReservationItem>
          </ItemLine>
          <ReservationDate>
            {format(start, 'EEEE, MMMM do  Y').toUpperCase()}
          </ReservationDate>
          <Time>{cruiseTimeStrings[1]}</Time>
          <HR />
          <Prompt>PARTY SIZE</Prompt>
          <Answer
            value={partySize}
            onChange={(e) => setPartySize(parseInt(e.target.value))}
          >
            <option disabled value={'default'}>
              CHOOSE AN OPTION
            </option>
            {partySizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Answer>
          <Prompt>PARTY TYPE</Prompt>
          <Answer
            value={partyType}
            onChange={(e) => setPartyType(e.target.value as PartyType)}
          >
            <option disabled value={'default'}>
              CHOOSE AN OPTION
            </option>
            {Object.keys(PartyType).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Answer>
          <HR />
          <HeavyHeader>INFO</HeavyHeader>
          <TextInput value={name} type="text" onChange={handleNameChange} />
          <TextInput value={phone} type="tel" onChange={handlePhoneChange} />
          <TextInput value={email} type="email" onChange={handleEmailChange} />
          <SubmitButton
            type="submit"
            value={submitText}
            disabled={submitDisabled}
            onClick={submitForm}
          />
        </>
      )}
    </Formlet>
  );
};
