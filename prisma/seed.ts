import { PrismaClient } from '@prisma/client';
import * as bcypt from 'bcrypt';

const prisma = new PrismaClient();
const roundsOfHashing = 10;

async function main() {
  // create a dummy user
  const passwordUser1 = await bcypt.hash('user123', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'user1@findash.com' },
    update: {
      password: passwordUser1,
    },
    create: {
      name: 'User 1',
      email: 'user1@findash.com',
      password: passwordUser1,
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
