import { GetServerSideProps, NextPage } from 'next';
import prisma from '@everything-zen/data-access';
import { PartyType, Subheading } from '@everything-zen/ui-components';
import { Success } from '../../components/Form/Success';
import { addMinutes, format } from 'date-fns';
import { analyticsEvent } from '../../lib/analytics';

interface SubmitReservationPageProps {
  ok: boolean;
}

const SubmitReservationPage: NextPage<SubmitReservationPageProps> = ({
  ok,
}) => {
  if (ok) {
    return <Success />;
  } else {
    return (
      <>
        <Subheading>There was an error submitting your reservation.</Subheading>
        <Subheading>Please try again.</Subheading>
      </>
    );
  }
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const {
    avail: availID,
    name,
    phone,
    email,
    partySize,
    partyType,
  } = query as {
    [key: string]: string;
  };
  const avail = await prisma.availability.findUnique({
    where: {
      id: +availID,
    },
    select: {
      start: true,
      type: true,
      event: true,
    },
  });
  const { event: existingEvent, start, type } = avail;
  if (existingEvent) {
    return {
      props: {
        ok: false,
      },
    };
  }

  const event = await prisma.event.create({
    data: {
      start: start,
      duration: type.duration,
      partySize: +partySize,
      partyType: partyType.toUpperCase() as PartyType,
      availability: {
        connect: {
          id: +availID,
        },
      },
      type: {
        connect: {
          type: type.type,
        },
      },
      party: {
        create: {
          name,
          phone,
          email,
        },
      },
    },
  });

  if (event) {
    fetch('/api/mail/sendConfirmation', {
      method: 'PUT',
      body: JSON.stringify({
        to: email,
        date: format(start, 'MMMM do, yyyy'),
        timeRange:
          format(start, 'h:mm') +
          ' - ' +
          format(addMinutes(start, type.duration), 'h:mm'),
      }),
    });
    // analyticsEvent({
    //       action: 'purchase',
    //       params: {
    //         event_label: 'reserve-charter',
    //       },
    //     })
    return {
      props: {
        ok: true,
      },
    };
  } else {
    return {
      props: {
        ok: false,
      },
    };
  }
};

export default SubmitReservationPage;
