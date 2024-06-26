import { GetServerSideProps, NextPage } from 'next';
import { Layout } from '../../components/Layout';
import { Month } from '@everything-zen/ui-components';
import { NextSeo } from 'next-seo';
import {
  fetchAndFormatAvailability,
  SerializableMonth,
} from '@everything-zen/data-access';
import { addHours } from 'date-fns';
import { Form } from '../../components/Form';
import { fetchBanner } from '../../lib/content/contentfulPosts';

type ReservePageProps = {
  availability: SerializableMonth[];
  bannerText?: string;
};

const ReservePage: NextPage<ReservePageProps> = ({
  availability: serializedAvail,
  bannerText
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
        title="RESERVE"
        description="Reserve your private Charleston Harbor catamaran charter today."
        canonical={'https://everythingzensailingcharters.com/reserve'}
      />
      <Layout bannerText={bannerText}>
        <Form {...{ availability }} />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (_) => {
  const months = await fetchAndFormatAvailability();
  const bannerText = await fetchBanner();
  return {
    props: {
      bannerText,
      availability: months,
    },
  };
};

export default ReservePage;
