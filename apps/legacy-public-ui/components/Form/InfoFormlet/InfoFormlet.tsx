import React from 'react';
import {
  Answer,
  ItemLine,
  ReservationDate,
  ReservationItem,
  TextInput,
  Time,
} from './styles';
import { addMinutes, format } from 'date-fns';
import {
  Availability,
  HeavyHeader,
  HR,
  PartyType,
  SubmitButton,
  SubtleHeader,
} from '@everything-zen/ui-components';
import { BackArrow, BackButton, BackText, Formlet, Prompt } from '../styles';

export type InfoFormletProps = {
  name: string;
  email: string;
  phone: string;
  partySize: number | string;
  partyType: PartyType | string;
  advanceForm: () => void;
  goBack: () => void;
  handlePhoneChange: React.ChangeEventHandler<HTMLInputElement>;
  handleEmailChange: React.ChangeEventHandler<HTMLInputElement>;
  handleNameChange: React.ChangeEventHandler<HTMLInputElement>;
  setPartySize: React.Dispatch<React.SetStateAction<number | 'default'>>;
  setPartyType: React.Dispatch<React.SetStateAction<PartyType | 'default'>>;
  selectedAvail: Availability;
};

export const InfoFormlet: React.FC<InfoFormletProps> = ({
  name,
  phone,
  email,
  partySize,
  partyType,
  advanceForm,
  goBack,
  handleNameChange,
  handleEmailChange,
  handlePhoneChange,
  setPartyType,
  setPartySize,
  selectedAvail,
}) => {
  const submitDisabled =
    !name ||
    !phone ||
    !email ||
    partySize === 'default' ||
    partyType === 'default';

  const { start, length, cost } = selectedAvail;
  const [startTimeString, endTimeString] = [
    format(start, 'h:mm'),
    format(addMinutes(start, length), 'h:mm'),
  ];
  const cruiseTimeStrings = [
    selectedAvail.type,
    startTimeString + ' - ' + endTimeString,
  ];
  const partySizeOptions = [1, 2, 3, 4, 5, 6];

  return (
    <Formlet>
      <BackButton onClick={() => goBack()}>
        <BackArrow src={'/leftarrow.svg'} alt={'back arrow'} />
        <BackText>CHOOSE A DIFFERENT DATE OR TIME</BackText>
      </BackButton>
      <HR />
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
      <Prompt>HOW MANY PEOPLE ARE IN YOUR GROUP?</Prompt>
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
      <Prompt>TELL US ABOUT YOUR PARTY</Prompt>
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
      <HeavyHeader>CONTACT</HeavyHeader>
      <TextInput
        value={name}
        type="text"
        placeholder={'FULL NAME'}
        onChange={handleNameChange}
      />
      <TextInput
        value={phone}
        type="tel"
        placeholder={'PHONE NUMBER'}
        onChange={handlePhoneChange}
      />
      <TextInput
        value={email}
        type="email"
        placeholder={'EMAIL'}
        onChange={handleEmailChange}
      />
      <SubmitButton
        type="submit"
        value="CONTINUE"
        disabled={submitDisabled}
        onClick={advanceForm}
      />
    </Formlet>
  );
};

InfoFormlet.displayName = 'InfoFormlet';
