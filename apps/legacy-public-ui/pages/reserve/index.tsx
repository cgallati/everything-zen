import { GetServerSideProps, NextPage } from 'next';
import { Layout } from '../../components/Layout';
import { Month } from '@everything-zen/ui-components';
import { NextSeo } from 'next-seo';
import { fetchAndFormatAvailability } from '@everything-zen/data-access';
import { addHours, getDaysInMonth, getMonth, getYear } from 'date-fns';
import { Form } from '../../components/Form';
import { SerializableMonth } from '../../../../libs/data-access/src/types';
import { getTimezoneOffset } from 'date-fns-tz';

type ReservePageProps = {
  availability: SerializableMonth[];
};

const ReservePage: NextPage<ReservePageProps> = ({
  availability: serializedAvail,
}) => {
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
      <Layout>
        <Form {...{ availability }} />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (_) => {
  const months = await fetchAndFormatAvailability();

  return {
    props: {
      availability: months,
    },
  };
};

export default ReservePage;
