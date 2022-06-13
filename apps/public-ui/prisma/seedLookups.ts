import { PrismaClient } from "@prisma/client"

console.log("generating prisma client...")
const prisma = new PrismaClient()
console.log("Success.")

const CHARTER_DURATION = 150
const CHARTER_TYPE = "CHARTER"

async function main() {
  console.log("upserting charter type...")
  const charterType: any = await prisma.eventType
    .upsert({
      where: { type: CHARTER_TYPE },
      update: {},
      create: {
        type: CHARTER_TYPE,
        cost: 650,
        duration: CHARTER_DURATION,
      },
    })
    .then(() => console.log("Success:", { charterType }))
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    console.log("Done. Disconnecting...")
    await prisma.$disconnect()
    console.log("Disconnected.")
  })
