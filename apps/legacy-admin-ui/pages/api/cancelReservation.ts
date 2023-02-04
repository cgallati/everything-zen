import prisma from '@everything-zen/data-access';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = JSON.parse(req.body);
  await prisma.event
    .delete({
      where: {
        id,
      },
    })
    .then(() => res.status(200).json('OK'))
    .catch(() => res.status(500).json('ERROR'));
};
