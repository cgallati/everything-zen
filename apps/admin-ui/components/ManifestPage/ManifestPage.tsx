import {
  ContentSection,
  PageHeading,
  Subheading,
  Charter,
} from '@everything-zen/ui-components';
import React, { FC } from 'react';
import { HR, List } from './styles';
import { Reservation } from './Reservation';
import { Layout } from '../Layout';

export const ManifestPage: FC<ManifestPageProps> = ({ reservations }) => {
  return (
    <Layout>
      <PageHeading>MANIFEST</PageHeading>
      <HR />
      <ContentSection>
        {reservations.length === 0 ? (
          <Subheading>No Charters Reserved</Subheading>
        ) : (
          <List>
            {reservations.map((reservation) => (
              <Reservation {...reservation} key={reservation.time.getTime()} />
            ))}
          </List>
        )}
      </ContentSection>
    </Layout>
  );
};

export interface ManifestPageProps {
  reservations: Charter[];
}
