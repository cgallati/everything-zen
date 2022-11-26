import { GetServerSideProps, NextPage } from 'next';
import { AdminLayout } from '../components/AdminLayout';
import { NextSeo } from 'next-seo';
import {
  fetchAndFormatAvailability,
  SerializableMonth,
} from '@everything-zen/data-access';
import { ReserveForm } from '../components/Forms';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Month } from '@everything-zen/ui-components';
import { addHours } from 'date-fns';

type ReservePageProps = {
  availability: SerializableMonth[];
};

const ReservePage: NextPage<ReservePageProps> = ({
  availability: serializedAvail,
}) => {
  // todo: untangle prisma client from this dep so we don't have to duplicate the util below
  // const availability = deserializeAvailability(serializedAvail);
  const getOffsetFromChs = (date: Date, chsOffset: -4 | -5) => {
    const localOffset = date.getTimezoneOffset() / 60;
    return localOffset + chsOffset;
  };

  const availability: Month[] = serializedAvail.map((month) => ({
    ...month,
    firstDate: addHours(
      new Date(month.firstDate),
      getOffsetFromChs(new Date(month.firstDate), month.firstDateOffsetHours)
    ),
    days: month.days.map((day) => ({
      ...day,
      avails: day.avails.map((avail) => ({
        ...avail,
        start: addHours(
          new Date(avail.start),
          getOffsetFromChs(new Date(avail.start), avail.startOffsetHours)
        ),
      })),
    })),
  }));

  return (
    <>
      <NextSeo
        title="Reservations"
        description="Reserve your private Charleston Harbor cruise today."
      />
      <AdminLayout>
        <ReserveForm {...{ availability }} />
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

export default ReservePage;
