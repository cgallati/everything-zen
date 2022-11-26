import prisma from '@everything-zen/data-access';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { avails } = JSON.parse(req.body);
  const event = await prisma.availability.deleteMany({
    where: {
      id: { in: [...avails] },
    },
  });
  res.status(200).json(event);
};
