import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import { PaymentLinkPage } from '../components/PaymentLinkPage/PaymentLinkPage';

const PaymentLink: FC = () => {
  return <PaymentLinkPage />;
};

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (_) => {
    return {
      props: {},
    };
  },
});

export default PaymentLink;