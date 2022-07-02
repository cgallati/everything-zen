import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import phoneNumberFormatter from 'phone-number-formats';
import Modal from 'react-modal';

import {
  CancelButton,
  CancellationText,
  CardHeader,
  ContactInfo,
  ModalContent,
  modalStyles,
  PartyInfo,
  ReservationCard,
} from './styles';
import { addMinutes, format } from 'date-fns';
import { Charter } from '@everything-zen/ui-components';

export const Reservation: React.FC<Charter> = ({
  id,
  time,
  guest,
  partyType,
  partySize,
  duration,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);
  const [cancelled, setCancelled] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const date = format(time, 'MMMM do, yyyy');
  const timeRange =
    format(time, 'h:mm') + ' - ' + format(addMinutes(time, duration), 'h:mm');
  let formattedPhone: string;
  try {
    formattedPhone = new phoneNumberFormatter(guest.phone).format({
      type: 'domestic',
      separator: '.',
    }).string;
  } catch {
    formattedPhone = guest.phone;
  }

  const cancelCharter = async (id: number) => {
    setError(false);
    await fetch('/api/cancelReservation', {
      method: 'PUT',
      body: JSON.stringify({ id }),
    })
      .then(() => {
        setIsOpen(false);
        setCancelled(true);
      })
      .catch(() => setError(true));
  };
  Modal.setAppElement('#__next');
  return (
    <ReservationCard>
      <CardHeader>
        <h2>{date.toUpperCase()}</h2>
        <h2>{timeRange}</h2>
      </CardHeader>
      <ContactInfo>
        <h2>{guest.name.toUpperCase()}</h2>
        <h2>{guest.email}</h2>
        <h2>{formattedPhone}</h2>
      </ContactInfo>
      <PartyInfo>
        <div>
          <h3>
            <span>PARTY SIZE:</span> {partySize}
          </h3>
          <h3>
            <span>PARTY TYPE:</span> {partyType}
          </h3>
        </div>
        {cancelled ? (
          <CancellationText>CANCELLED</CancellationText>
        ) : (
          <CancelButton onClick={() => setIsOpen(true)}>CANCEL</CancelButton>
        )}
      </PartyInfo>
      <Modal
        isOpen={modalIsOpen}
        style={modalStyles}
        contentLabel="Cancel Charter Confirmation"
      >
        <ModalContent>
          <h2>CANCEL CHARTER?</h2>
          <button onClick={() => cancelCharter(id)}>YES</button>
          <button onClick={() => setIsOpen(false)}>NO</button>
          {error && (
            <p>hmmm... there was an error. If it happens again, text Chad 🥴</p>
          )}
        </ModalContent>
      </Modal>
    </ReservationCard>
  );
};
