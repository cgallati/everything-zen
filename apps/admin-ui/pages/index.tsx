import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import prisma from '@everything-zen/data-access';
import {
  ManifestPage,
  ManifestPageProps,
  Charter,
} from '@everything-zen/ui-components';

const MainPage: FC<ManifestPageProps> = ({ reservations }) => {
  return <ManifestPage reservations={reservations} />;
};

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (_) => {
    const reservations: Charter[] = await prisma.event
      .findMany({
        where: {
          start: {
            gt: new Date(),
          },
        },
        orderBy: {
          start: 'asc',
        },
        include: {
          party: {
            select: {
              name: true,
              email: true,
              phone: true,
            },
          },
          type: {
            select: {
              type: true,
              cost: true,
              duration: true,
            },
          },
        },
      })
      .then((events) =>
        events.map(({ start, duration, partySize, partyType, party, id }) => ({
          id,
          guest: party[0],
          partyType,
          time: new Date(start),
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          partySize: partySize!,
          duration,
        }))
      );

    return {
      props: {
        reservations,
      },
    };
  },
});

export default MainPage;
