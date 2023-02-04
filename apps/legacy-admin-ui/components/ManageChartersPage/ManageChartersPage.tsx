import { PageHeading } from '@everything-zen/ui-components';
import { HR } from '../ManifestPage/styles';
import { BandedCardList } from '@everything-zen/ui-components';
import React, { FC } from 'react';
import { EventType } from '@everything-zen/data-access';
import { EditableCharterCard } from './EditableCharterCard';

export const ManageChartersPage: FC<{ charters: EventType[] }> = ({
  charters,
}) => {
  return (
    <>
      <PageHeading>CHARTERS</PageHeading>
      <HR />
      <BandedCardList>
        {charters.map((eventType) => (
          <EditableCharterCard charter={eventType} key={eventType.id} />
        ))}
      </BandedCardList>
    </>
  );
};
