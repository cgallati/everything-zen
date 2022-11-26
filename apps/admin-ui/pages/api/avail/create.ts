import prisma from '@everything-zen/data-access';
import { NextApiRequest, NextApiResponse } from 'next';
import { setHours, setMinutes } from 'date-fns';

const getStartTimeDate = (
  month: string,
  day: string,
  year: string,
  startTime: string
) => {
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const [startHour, startMin] = startTime.split(':');
  const hourDate = setHours(date, parseInt(startHour));
  return setMinutes(hourDate, parseInt(startMin));
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { startDate, endDate, startTime, type } = req.body;
  const avails = [];
  const [year, month, date] = startDate.split('-');
  if (endDate) {
    const [_endYear, _endMonth, endDay] = endDate.split('-');

    for (let i = date; i <= endDay; i++) {
      avails.push({
        start: getStartTimeDate(month, i, year, startTime),
        typeId: type === 'CHARTER' ? 1 : 2,
      });
    }
  } else {
    avails.push({
      start: getStartTimeDate(month, date, year, startTime),
      typeId: type === 'CHARTER' ? 1 : 2,
    });
  }
  const response = await prisma.availability.createMany({
    data: avails,
  });
  console.log(response);
  res.status(200).redirect('/availability');
};
