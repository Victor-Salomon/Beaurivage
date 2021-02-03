// import mysql from "myslq2";

// const db = mysql({
//   port: process.env.PORT,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// export default async function executeQuery({ query, values }) {
//   try {
//     const results = await db.query(query, values);
//     await db.end();
//     return results;
//   } catch (error) {
//     return { error };
//   }
// }

import { PrismaClient } from "@prisma/client";

export default new PrismaClient();
