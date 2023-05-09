import { PrismaClient } from '@prisma/client';

console.log("Lib-Prisma: ")

// const client = global.prismadb || new PrismaClient();
const client = new PrismaClient();

// if (process.env.NODE_ENV !== 'production') global.prismadb = client;

export default client;