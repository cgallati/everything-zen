import { PrismaClient } from '@prisma/client';
import {
  addDays,
  addMinutes,
  addMonths,
  isBefore,
  setDate,
  setHours,
  setMinutes,
} from 'date-fns';

const prisma = new PrismaClient();

const CHARTER_DURATION = 150;
const CHARTER_TYPE = 'CHARTER';

const generateDay = (date: Date) => {
  const firstStart = setMinutes(setHours(date, 13), 0);
  const secondStart = addMinutes(firstStart, CHARTER_DURATION + 30);
  return [
    {
      start: firstStart,
      typeId: 1,
    },
    {
      start: secondStart,
      typeId: 2,
    },
  ];
};

// not  April 12-15.
const upsertAvailDay = async (date: Date, freeAvails?: 0 | 1 | 2) => {
  const firstStart = setHours(date, 14);
  await prisma.availability.upsert({
    where: { start: firstStart },
    update: {},
    create: {
      start: firstStart,
      type: {
        connect: {
          type: CHARTER_TYPE,
        },
      },
    },
  });

  const secondStart = setHours(firstStart, 17.5);
  await prisma.availability.upsert({
    where: { start: secondStart },
    update: {},
    create: {
      start: secondStart,
      type: {
        connect: {
          type: CHARTER_TYPE,
        },
      },
    },
  });
};

async function main() {
  let dateCursor = new Date(2022, 6, 1, 1);
  const endDate = setDate(addMonths(dateCursor, 3), 15);
  const days = [];
  while (isBefore(dateCursor, endDate)) {
    console.log('Generating day for ', dateCursor);
    days.push(...generateDay(dateCursor));
    console.log('Done: ', dateCursor);
    dateCursor = addDays(dateCursor, 1);
  }
  console.log('Persisting...');
  const count = await prisma.availability.createMany({
    data: days,
  });
  console.log(`Persisted ${count} records.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
