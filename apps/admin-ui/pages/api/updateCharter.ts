import prisma, { EventType } from '@everything-zen/data-access';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const payload = JSON.parse(req.body);
  const { type, id, cost, duration } = payload.eventType as EventType;
  await prisma.eventType
    .update({
      where: {
        id,
      },
      data: {
        type,
        cost,
        duration,
      },
    })
    .then(() => res.status(200).json('OK'))
    .catch((e) => {
      console.log(e);
      res.status(500).json('ERROR');
    });
};
