import { GetServerSideProps, NextPage } from 'next';
import prisma from '@everything-zen/data-access';
import {
  getConfirmationEmailHTMLString,
  getConfirmationEmailText,
  PartyType,
  Subheading,
} from '@everything-zen/ui-components';
import { Success } from '../../components/Form/Success';
import { addMinutes, format } from 'date-fns';
import { transporter } from '../../config/mail';

interface SubmitReservationPageProps {
  ok: boolean;
}

const DOMAIN = 'ezsailingcharters.com';

const defaultMessageData = {
  from: `"Everything Zen Sailing Charters" no-reply@${DOMAIN}`,
  subject: 'Your Charter Confirmation',
};

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
    if (process.env.SEND_EMAILS !== 'NO') {
      const date = format(start, 'MMMM do, yyyy');
      const timeRange =
        format(start, 'h:mm') +
        ' - ' +
        format(addMinutes(start, type.duration), 'h:mm');
      const data = {
        ...defaultMessageData,
        to: email,
        bcc: ['tggallati@gmail.com', `todd@${DOMAIN}`],
        text: getConfirmationEmailText({ date, timeRange }),
        replyTo: `todd@${DOMAIN}`,
        html: getConfirmationEmailHTMLString({ date, timeRange }),
      };
      await transporter(process.env.ZOHO_PW)
        .sendMail(data)
        .then(() => console.log('Success sending email to ' + email))
        .catch((e) => {
          console.error('Failure sending email to' + email + '. ' + e);
        });
    }
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
