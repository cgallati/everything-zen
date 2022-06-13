import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
  // get all
  // const allAvails = await prisma.availability.findMany({
  //   where: {
  //     start: {
  //       gt: new Date(),
  //     },
  //   },
  //   orderBy: {
  //     start: "asc",
  //   },
  //   include: {
  //     event: {
  //       select: {
  //         typeId: true,
  //       },
  //     },
  //   },
  // })
  //
  // const wednesdays = allAvails.filter(
  //   (avail) => avail.start.getDay() === 3 && !avail.event
  // )
  // console.log(wednesdays.map((wednesday) => wednesday.id))
  const unbookedWedIds = [
    1265, 1278, 1279, 1292, 1293, 1306, 1307, 1320, 1321, 1334, 1335, 1348,
    1349, 1362, 1363, 1376, 1377, 1390, 1391, 1404, 1405, 1418, 1419, 1432,
    1433, 1446, 1447, 1460, 1461, 1474, 1475, 1488, 1489, 1502, 1503, 1516,
    1517, 1592, 1593, 1606, 1607,
  ]
  // const res = await prisma.availability.deleteMany({
  //   where: {
  //     id: {
  //       in: unbookedWedIds,
  //     },
  //   },
  // })
  // console.log(res)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
