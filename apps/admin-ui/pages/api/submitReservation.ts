import prisma from '@everything-zen/data-access';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { avail, guest, partySize, partyType } = JSON.parse(req.body).data;
  const event = await prisma.event.create({
    data: {
      start: avail.start,
      duration: avail.length,
      partySize,
      partyType: partyType.toUpperCase(),
      availability: {
        connect: {
          id: avail.id,
        },
      },
      type: {
        connect: {
          type: 'CHARTER',
        },
      },
      party: {
        create: {
          ...guest,
        },
      },
    },
  });
  res.status(200).json(event);
};
