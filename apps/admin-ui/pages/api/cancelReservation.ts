import prisma from '@everything-zen/data-access';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = JSON.parse(req.body);
  try {
    await prisma.guest.deleteMany({ where: { eventId: id } });
    await prisma.event.delete({ where: { id } });
    res.status(200).json('OK');
  } catch (e) {
    console.error('cancelReservation error:', e);
    res.status(500).json('ERROR');
  }
};
