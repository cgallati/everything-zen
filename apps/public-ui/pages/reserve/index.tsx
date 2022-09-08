import { GetServerSideProps, NextPage } from 'next';
import { Layout } from '../../components/Layout';
import {
  Month,
  SerializableAvailability,
  SerializableMonth,
} from '@everything-zen/ui-components';
import { NextSeo } from 'next-seo';
import prisma from '@everything-zen/data-access';
import {
  addHours,
  addMonths,
  endOfMonth,
  getDate,
  getDaysInMonth,
  getMonth,
  getYear,
  isBefore,
  startOfMonth,
} from 'date-fns';
import { getTimezoneOffset } from 'date-fns-tz';
import { Form } from '../../components/Form';

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

type IndexedAvailability = {
  // year
  [key: number]: {
    // month
    [key: number]: {
      // date
      [key: number]: SerializableAvailability[];
    };
  };
};

export const getServerSideProps: GetServerSideProps = async (_) => {
  const avails = await prisma.availability.findMany({
    where: {
      start: {
        gt: new Date(),
      },
    },
    orderBy: {
      start: 'asc',
    },
    include: {
      event: {
        select: {
          typeId: true,
        },
      },
      type: {
        select: {
          id: true,
          type: true,
          cost: true,
          duration: true,
        },
      },
    },
  });

  // clean up query data for quick consumption
  const indexedAvails: IndexedAvailability = {};
  avails.forEach((avail) => {
    const year = getYear(avail.start);
    const month = getMonth(avail.start);
    const date = getDate(avail.start);
    indexedAvails[year] = indexedAvails[year] ? indexedAvails[year] : {};
    indexedAvails[year][month] = indexedAvails[year][month]
      ? indexedAvails[year][month]
      : {};
    indexedAvails[year][month][date] = indexedAvails[year][month][date]
      ? indexedAvails[year][month][date]
      : [];
    const todayRef: SerializableAvailability[] =
      indexedAvails[year][month][date];
    const normalizedAvail: SerializableAvailability = {
      id: avail.id,
      start: avail.start.toString(),
      length: avail.type.duration,
      cost: avail.type.cost,
      booked: !!avail.event,
      type: avail.type.type === 'CHARTER' ? 'DAYTIME' : 'SUNSET',
      startOffsetHours: (getTimezoneOffset('America/New_York', avail.start) /
        (1_000 * 60 * 60)) as -4 | -5,
    };
    todayRef.push(normalizedAvail);
  });

  // build up and return calendar availability props
  const months: SerializableMonth[] = [];
  let monthCursor = startOfMonth(
    avails.find((avail) => !avail.event)?.start || new Date()
  );
  const lastDate = endOfMonth(avails[avails.length - 1]?.start || new Date());
  while (isBefore(monthCursor, lastDate)) {
    const days = [];
    const daysInMonth = getDaysInMonth(monthCursor);
    for (let i = 1; i <= daysInMonth; i++) {
      const availsToday =
        indexedAvails[getYear(monthCursor)]?.[getMonth(monthCursor)]?.[i] || [];
      days.push({
        avails: availsToday,
      });
    }

    months.push({
      firstDate: monthCursor.toString(),
      firstDateOffsetHours: (getTimezoneOffset(
        'America/New_York',
        monthCursor
      ) /
        (1_000 * 60 * 60)) as -4 | -5,
      days,
    });
    monthCursor = addMonths(monthCursor, 1);
  }
  return {
    props: {
      availability: months,
    },
  };
};

export default ReservePage;
