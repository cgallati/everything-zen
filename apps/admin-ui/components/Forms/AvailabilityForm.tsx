import React, { useState } from 'react';

import {
  Availability,
  Calendar,
  CharterTimeButtons,
  Formlet,
  Month,
  FormletHeading,
  HR,
  SubtleHeader,
} from '@everything-zen/ui-components';
import Modal from 'react-modal';

import { format, getDate, isBefore } from 'date-fns';
import { AddAvailForm, AvailsButton } from './styles';
import { modalStyles } from '../ManifestPage/styles';

type FormProps = {
  availability: Month[];
};

export const AvailabilityForm: React.FC<FormProps> = ({ availability }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [selectedAvail, setSelectedAvail] = useState<Availability | null>(null);
  const [monthIdx, setMonthIdx] = useState<number>(0);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const handleDateClick = (
    date: Date,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (selectedDate === date) {
      setSelectedDate(null);
      setSelectedAvail(undefined);
    }
    if (e.shiftKey) {
      if (isBefore(date, selectedDate)) {
        setSelectedDate(null);
        setSelectedAvail(undefined);
      } else {
        setSelectedEndDate(date);
        setSelectedAvail(undefined);
      }
      return;
    }
    setSelectedDate(date);
    setSelectedEndDate(null);
    setSelectedAvail(undefined);
  };

  const handleCancelClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsAdding(false);
  };

  const handleDeleteSingle = async () => {
    await fetch('/api/avail/delete', {
      method: 'PUT',
      body: JSON.stringify({
        avails: [selectedAvail.id],
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw new Error('Failure deleting single avail');
      })
      .then(() => window.location.reload());
  };

  const handleDeleteAll = async () => {
    const startDate = getDate(selectedDate) - 1;
    const endDate = selectedEndDate ? getDate(selectedEndDate) - 1 : undefined;
    let avails: Availability[] = [];
    for (let i = startDate; i <= (endDate ? endDate : startDate); i++) {
      avails.push(...(availability[monthIdx].days[i]?.avails || []));
    }

    await fetch('/api/avail/delete', {
      method: 'PUT',
      body: JSON.stringify({
        avails: avails.map(({ id }) => id),
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw new Error('Failure deleting avails');
      })
      .then(() => window.location.reload());
  };

  const submitForm: React.FormEventHandler = async (e) => {
    e.stopPropagation();
    if (!selectedAvail) {
      return;
    }
  };

  return (
    <Formlet>
      <FormletHeading>MANAGE AVAILABILITY</FormletHeading>
      <Calendar
        months={availability}
        idx={monthIdx}
        setIdx={setMonthIdx}
        selectedDate={selectedDate}
        selectedEndDate={selectedEndDate}
        handleDateClick={handleDateClick}
        clearDateSelections={() => {
          setSelectedDate(null);
          setSelectedEndDate(null);
        }}
        allowAllSelections={true}
      />
      <CharterTimeButtons
        availDay={
          availability[monthIdx].days[getDate(selectedDate) - 1]?.avails || []
        }
        selected={selectedAvail}
        setSelectedAvail={setSelectedAvail}
      />
      {selectedDate && (
        <AvailsButton onClick={() => setIsAdding(true)}>
          ADD AVAILABILITY
        </AvailsButton>
      )}
      <HR />
      {selectedAvail && (
        <>
          <SubtleHeader>DELETE SELECTED AVAILABILITY</SubtleHeader>
          <AvailsButton onClick={handleDeleteSingle}>
            DELETE SINGLE
          </AvailsButton>
          <HR />
        </>
      )}
      {selectedDate && (
        <>
          <SubtleHeader>WARNING: DELETE ALL</SubtleHeader>
          <AvailsButton onClick={handleDeleteAll}>DELETE ALL</AvailsButton>
        </>
      )}
      <Modal
        isOpen={isAdding}
        style={modalStyles}
        contentLabel="Add Availability"
      >
        <AddAvailForm action={'/api/avail/create'} method="POST">
          <h2>Range</h2>
          <label>Start Date*</label>
          <input
            type={'date'}
            name={'startDate'}
            defaultValue={
              selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''
            }
          />
          <br />
          <label>End Date</label>
          <input
            type={'date'}
            name={'endDate'}
            defaultValue={
              selectedEndDate ? format(selectedEndDate, 'yyyy-MM-dd') : ''
            }
          />
          <br />
          <h2>Details</h2>
          <label>Start Time*</label>
          <input
            type={'time'}
            defaultValue={'13:00'}
            step={900}
            name={'startTime'}
          />
          <label>Charter Type</label>
          <select name={'type'}>
            <option>CHARTER</option>
            <option>SUNSET CHARTER</option>
          </select>
          <input type={'submit'} />
          <button onClick={handleCancelClick}>CANCEL</button>
        </AddAvailForm>
      </Modal>
    </Formlet>
  );
};

Modal.setAppElement('#__next');
