import React, { FC } from 'react';
import { Availability } from '@everything-zen/ui-components';
import { format } from 'date-fns';
import styled from 'styled-components';

interface TimeButtonProps {
  booked: boolean;
  isSelected?: boolean;
}

const CharterTimeButton = styled.button<TimeButtonProps>`
  display: block;
  background: #fff;
  width: 234px;
  height: 43px;
  box-shadow: 0px 1px 3px #00000066;
  border-radius: 3px;
  border: none;
  font: normal normal 300 11px/13px Source Sans Pro;
  letter-spacing: 2.12px;
  color: #00263a;
  margin: 0 auto 1.25rem auto;
  cursor: ${({ booked }) => (booked ? 'auto' : 'pointer')};

  :active {
    background: #00263a;
    color: #fff;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background: #00263a;
    color: #fff;
  `}

  opacity: ${({ booked }) => (booked ? '.35' : '1')};
`;

export const CharterTimeButtons: FC<{
  availDay: Availability[];
  setSelectedAvail: React.Dispatch<React.SetStateAction<Availability | null>>;
  selected?: Availability;
}> = ({ availDay, setSelectedAvail, selected }) => {
  const handleButtonClick = (avail: Availability) => {
    if (selected && selected.id === avail.id) {
      setSelectedAvail(null);
    } else {
      setSelectedAvail(avail);
    }
  };

  return (
    <>
      {availDay.map((avail) => (
        <CharterTimeButton
          key={avail.start.toTimeString()}
          booked={avail.booked}
          disabled={avail.booked}
          onClick={() => handleButtonClick(avail)}
          isSelected={selected && selected.id === avail.id}
        >
          <strong>{format(avail.start, 'h:mm')}</strong> {avail.length / 60}{' '}
          HOUR {avail.type} CRUISE
        </CharterTimeButton>
      ))}
    </>
  );
};
