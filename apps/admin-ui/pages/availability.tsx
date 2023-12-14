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
import {
  addHours,
  addMonths,
  addYears,
  getDaysInMonth,
  isBefore
} from 'date-fns';
import { getTimezoneOffset } from 'date-fns-tz';

type AvailabilityPageProps = {
  availability: SerializableMonth[];
};

const AvailabilityPage: NextPage<AvailabilityPageProps> = ({
  availability: serializedAvail,
}) => {
  const availability = deserializeAvailability(serializedAvail);
  console.log({ availability })
  const updatedAvail = availability.map(month => {
    if(month.firstDate.getHours() != 0) {
      const newFirstDate = addHours(month.firstDate, 1)
      return {
        ...month,
        firstDate: newFirstDate,
        firstDateOffsetHours: -4
      }
    }
    return month
  })

  return (
    <>
      <NextSeo
        title="Availability"
        description="Manage charter availability."
      />
      <AdminLayout>
        <AvailabilityForm {...{ availability: updatedAvail }} />
      </AdminLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (_) => {
    const months = await fetchAndFormatAvailability();
    const endDate = addYears(new Date(), 1);
    let dateCursor = new Date(months[months.length - 1].firstDate);
    while (isBefore(dateCursor, endDate)) {
      const daysInMonth = getDaysInMonth(dateCursor);
      const days = [];
      for (let i = 1; i <= daysInMonth; i++) {
        const availsToday = [];
        days.push({
          avails: availsToday,
        });
      }
      months.push({
        firstDate: dateCursor.toString(),
        firstDateOffsetHours: (getTimezoneOffset(
          'America/New_York',
          dateCursor
        ) /
          (1_000 * 60 * 60)) as -4 | -5,
        days,
      });
      dateCursor = addMonths(new Date(months[months.length - 1].firstDate), 1);
    }
    return {
      props: {
        availability: months,
      },
    };
  },
});

export default AvailabilityPage;
