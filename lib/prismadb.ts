import { PrismaClient } from '@prisma/client';
console.log("PrismaDB-TD: ")
console.log(global)
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prismadb = client;

// console.log("PrismaDB-TD2: ")
// console.log(global)

export default client;