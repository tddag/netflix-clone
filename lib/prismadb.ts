import { PrismaClient } from '@prisma/client';
// console.log("PrismaDB-TD: ")
// console.log(global)
const client = globalThis.prismadb || new PrismaClient();
// const client = new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prismadb = client;

// console.log("PrismaDB-TD2: ")
// console.log(global)

export default client;