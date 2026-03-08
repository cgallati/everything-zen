import { PrismaClient } from '@prisma/client';

console.log('generating prisma client...');
const prisma = new PrismaClient();
console.log('Success.');

const CHARTER_DURATION = 150;
const CHARTER_TYPE = 'CHARTER';

async function main() {
  console.log('upserting charter type...');
  await prisma.eventType
    .upsert({
      where: { type: CHARTER_TYPE },
      update: {},
      create: {
        type: CHARTER_TYPE,
        cost: 650,
        duration: CHARTER_DURATION,
      },
    })
    .then((charterType) => console.log('Success:', { charterType }));

  console.log('upserting charter with daisy type...');
  await prisma.eventType
    .upsert({
      where: { type: 'CHARTER WITH DAISY' },
      update: { cost: 975, duration: 150 },
      create: {
        type: 'CHARTER WITH DAISY',
        cost: 975,
        duration: 150,
      },
    })
    .then((charterType) => console.log('Success:', { charterType }));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Done. Disconnecting...');
    await prisma.$disconnect();
    console.log('Disconnected.');
  });
