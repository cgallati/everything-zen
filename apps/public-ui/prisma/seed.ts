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

  // switch (freeAvails) {
  //   case 0:
  //     return
  //   case 1:
  //     const availTime = Math.round(Math.random()) ? firstStart : secondStart
  //     await prisma.event.upsert({
  //       where: { start: availTime },
  //       update: {},
  //       create: {
  //         start: availTime,
  //         availability: {
  //           connect: {
  //             start: availTime,
  //           },
  //         },
  //         type: {
  //           connect: {
  //             type: CHARTER_TYPE,
  //           },
  //         },
  //         duration: CHARTER_DURATION,
  //         // party: {}
  //         partySize: 0,
  //         // partyType:
  //       },
  //     })
  //     break
  //   case 2:
  //     await prisma.event.upsert({
  //       where: { start: firstStart },
  //       update: {}
  //       create: {
  //         start: firstStart,
  //         availability: {
  //           connect: {
  //             start: firstStart,
  //           },
  //         },
  //         type: {
  //           connect: {
  //             type: CHARTER_TYPE,
  //           },
  //         },
  //         duration: CHARTER_DURATION,
  //         // party: {}
  //         partySize: 0,
  //         // partyType:
  //       },
  //     })
  //     await prisma.event.upsert({
  //       where: { start: secondStart },
  //       update: {},
  //       create: {
  //         start: secondStart,
  //         availability: {
  //           connect: {
  //             start: secondStart,
  //           },
  //         },
  //         type: {
  //           connect: {
  //             type: CHARTER_TYPE,
  //           },
  //         },
  //         duration: CHARTER_DURATION,
  //         // party: {}
  //         partySize: 0,
  //         // partyType:
  //       },
  //     })
  //     break
  //   default:
  //     return
  // }
};

async function main() {
  let dateCursor = new Date(2022, 9, 1, 1);
  const endDate = setDate(addMonths(dateCursor, 1), 15);
  let days: any = [];
  while (isBefore(dateCursor, endDate)) {
    console.log('Generating day for ', dateCursor);
    // const bookings = Math.floor(Math.random() * 3) as 0 | 1 | 2
    // console.log("bookings: ", bookings)
    // await upsertAvailDay(dateCursor, bookings)
    // await upsertAvailDay(dateCursor)
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
