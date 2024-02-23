import mailjet from 'node-mailjet';
import { format, addMinutes } from 'date-fns';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { start, type, email, DOMAIN, defaultMessageData } = req.body;

    // Formatting date and time range
    const date = format(start, 'MMMM do, yyyy');
    const timeRange = format(start, 'h:mm') + ' - ' + format(addMinutes(start, type.duration), 'h:mm');

    // Constructing the email data
    const emailData = {
      ...defaultMessageData,
      Messages: [
        {
          From: {
            Email: `todd@${DOMAIN}`,
            Name: 'Your Name' // Replace with your name or company name
          },
          To: [
            {
              Email: email
            }
          ],
          Bcc: [
            { Email: 'tggallati@gmail.com' },
            { Email: `todd@${DOMAIN}` }
          ],
          Subject: 'Your Reservation Confirmation', // Replace with your subject
          TextPart: getConfirmationEmailText({ date, timeRange }),
          HTMLPart: getConfirmationEmailHTMLString({ date, timeRange }),
          ReplyTo: {
            Email: `todd@${DOMAIN}`
          }
        }
      ]
    };

    try {
      // Configure MailJet client
      const client = mailjet.connect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY);

      // Send the email
      await client.post('send', { version: 'v3.1' }).request(emailData);
      console.log('Success sending email to ' + email);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (e) {
      console.error('Failure sending email to ' + email + '. ' + e);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
