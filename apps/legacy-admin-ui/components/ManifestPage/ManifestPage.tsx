import {
  ContentSection,
  PageHeading,
  Subheading,
  Charter,
} from '@everything-zen/ui-components';
import React, { FC } from 'react';
import { HR, List } from './styles';
import { Reservation } from './Reservation';
import { AdminLayout } from '../AdminLayout';

export const ManifestPage: FC<ManifestPageProps> = ({ reservations }) => {
  return (
    <AdminLayout>
      <PageHeading>MANIFEST</PageHeading>
      <HR />
      <ContentSection>
        {reservations.length === 0 ? (
          <Subheading>No Charters Reserved</Subheading>
        ) : (
          <List>
            {reservations.map((reservation) => (
              <Reservation
                {...reservation}
                key={(reservation.time as Date).getTime()}
              />
            ))}
          </List>
        )}
      </ContentSection>
    </AdminLayout>
  );
};

export interface ManifestPageProps {
  reservations: Charter[];
}
