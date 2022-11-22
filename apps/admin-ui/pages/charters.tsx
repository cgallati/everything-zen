import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import prisma, { EventType } from '@everything-zen/data-access';
import { AdminLayout } from '../components/AdminLayout';
import { ManageChartersPage } from '../components/ManageChartersPage/ManageChartersPage';

const CharterPage: FC<{ charters: EventType[] }> = ({ charters }) => {
  return (
    <AdminLayout>
      <ManageChartersPage charters={charters} />
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (_) => {
    const charterTypes = await prisma.eventType.findMany();

    return {
      props: {
        charters: charterTypes,
      },
    };
  },
});

export default CharterPage;
