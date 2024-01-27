import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create a dummy user
  const user1 = await prisma.user.upsert({
    where: { email: 'user1@findash.com' },
    update: {},
    create: {
      name: 'User 1',
      email: 'user1@findash.com',
      password: 'user123',
    },
  });

  console.log({ user1 });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
