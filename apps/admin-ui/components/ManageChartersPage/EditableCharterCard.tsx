import React, { FC, useState } from 'react';
import { EventType } from '@everything-zen/data-access';
import {
  BandedCardDetailArea,
  BandedCardFrame,
  BandedCardHeader,
  EditButton,
} from '@everything-zen/ui-components';
import Modal from 'react-modal';
import { modalStyles } from '../ManifestPage/styles';
import { EditForm } from './styles';
import { useRouter } from 'next/router';

export const EditableCharterCard: FC<{ charter: EventType }> = ({
  charter,
}) => {
  const router = useRouter();

  const [charterName, setCharterName] = useState<string>(charter.type);
  const [charterCost, setCharterCost] = useState<number>(charter.cost);
  const [charterDuration, setCharterDuration] = useState<number>(
    charter.duration
  );

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const resetEditingState = () => {
    setIsEditing(false);
    setCharterName(charter.type);
    setCharterCost(charter.cost);
    setCharterDuration(charter.duration);
  };

  const saveDisabled =
    charterName === charter.type &&
    charterCost === charter.cost &&
    charterDuration === charterDuration &&
    !!charterName &&
    !!charterDuration &&
    !!charterCost;

  const save = async (e) => {
    e.preventDefault();
    setError(false);
    await fetch('/api/updateCharter', {
      method: 'PUT',
      body: JSON.stringify({
        eventType: {
          id: charter.id,
          type: charterName,
          cost: charterCost,
          duration: charterDuration,
        },
      }),
    })
      .then(async () => {
        setIsEditing(false);
        router.reload();
        // await setTimeout(() => router.reload(), 1);
      })
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  };

  Modal.setAppElement('#__next');

  return (
    <BandedCardFrame key={charter.id}>
      <BandedCardHeader>
        <h2>{charter.type}</h2>
      </BandedCardHeader>
      <BandedCardDetailArea>
        <div>
          <h2>Cost: ${charter.cost}</h2>
          <h2>Duration: {charter.duration} MINS</h2>
        </div>
        <div>
          <EditButton onClick={() => setIsEditing(true)}>EDIT</EditButton>
        </div>
      </BandedCardDetailArea>
      <Modal
        isOpen={isEditing}
        style={modalStyles}
        contentLabel="Cancel Charter Confirmation"
      >
        <EditForm>
          <h2>EDIT CHARTER</h2>
          <label>NAME</label>
          <input
            value={charterName}
            disabled={true} // some logic depends on this value
            onChange={(e) => setCharterName(e.target.value)}
          />
          <label>COST</label>
          <input
            value={charterCost}
            onChange={(e) => setCharterCost(parseInt(e.target.value))}
          />
          <label>DURATION (MINS)</label>
          <input
            value={charterDuration}
            onChange={(e) => setCharterDuration(parseInt(e.target.value))}
          />
          <button onClick={(e) => save(e)} disabled={saveDisabled}>
            SAVE
          </button>
          <button onClick={() => resetEditingState()}>CANCEL</button>
          {error && (
            <p>hmmm... there was an error. If it happens again, text Chad 🥴</p>
          )}
        </EditForm>
      </Modal>
    </BandedCardFrame>
  );
};
