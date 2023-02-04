import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import prisma from '@everything-zen/data-access';
import { Charter } from '@everything-zen/ui-components';
import {
  ManifestPage,
  ManifestPageProps,
} from '../components/ManifestPage/ManifestPage';

const MainPage: FC<ManifestPageProps> = ({ reservations }) => {
  reservations.map((res) => {
    res.time = new Date(res.time as string);
  });
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
          time: new Date(start).toISOString(),
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
