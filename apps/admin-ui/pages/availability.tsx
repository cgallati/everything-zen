import { GetServerSideProps, NextPage } from 'next';
import { AdminLayout } from '../components/AdminLayout';
import { NextSeo } from 'next-seo';
import {
  fetchAndFormatAvailability,
  SerializableMonth,
} from '@everything-zen/data-access';
import { AvailabilityForm } from '../components/Forms';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { deserializeAvailability } from '../lib/data-access';

type AvailabilityPageProps = {
  availability: SerializableMonth[];
};

const AvailabilityPage: NextPage<AvailabilityPageProps> = ({
  availability: serializedAvail,
}) => {
  const availability = deserializeAvailability(serializedAvail);

  return (
    <>
      <NextSeo
        title="Availability"
        description="Manage charter availability."
      />
      <AdminLayout>
        <AvailabilityForm {...{ availability }} />
      </AdminLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (_) => {
    const months = await fetchAndFormatAvailability();
    return {
      props: {
        availability: months,
      },
    };
  },
});

export default AvailabilityPage;
