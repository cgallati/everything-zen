import type { NextApiRequest, NextApiResponse } from 'next';
import { transporter } from '../../../config/mail';
import {
  getConfirmationEmailHTMLString,
  getConfirmationEmailText,
} from '@everything-zen/ui-components';

const DOMAIN = 'ezsailingcharters.com';

const defaultMessageData = {
  from: `"Everything Zen Sailing Charters" no-reply@${DOMAIN}`,
  subject: 'Your Charter Confirmation',
};

const SendConfirmation = async (req: NextApiRequest, res: NextApiResponse) => {
  if (process.env.SEND_EMAILS === 'NO') {
    res.status(204);
    return;
  }
  const { to, date, timeRange } = JSON.parse(req.body);

  const data = {
    ...defaultMessageData,
    to,
    bcc: ['tggallati@gmail.com', `todd@${DOMAIN}`],
    text: getConfirmationEmailText({ date, timeRange }),
    replyTo: `todd@${DOMAIN}`,
    html: getConfirmationEmailHTMLString({ date, timeRange }),
  };
  await transporter(process.env.ZOHO_PW)
    .sendMail(data)
    .then(() => console.log('Success sending email to ' + to))
    .catch((e) => {
      console.error('Failure sending email to' + to + '. ' + e);
      res.status(500);
      return;
    });
  res.status(200);
};

export default SendConfirmation;
