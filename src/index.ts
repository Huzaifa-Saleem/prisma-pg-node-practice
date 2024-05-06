import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser() {
  const res = await prisma.users.create({
    data: {
      email: "testing@gmail.com",
      password: "12345678",
      username: "test",
    },
  });
  console.log(res);
}

// insertUser();
