// npm init -y
// npm i -D typescript @types/node tsx tsup
// npx tsc --init
// npx prisma init

// 1. docker compose up -d
// 4. npm run dev

// sudo apt install gh
// source ~/.zshrc
// gh auth login
// gh repo create

import { fastify } from "fastify";

const port = process.env.PORT ? +process.env.PORT : 3333;

const app = fastify();

app.get("/", async (request, reply) => {
  return reply.send({ hello: "world" });
});

app.get("/peve", async (request, reply) => {
  return reply.send({ hello: "peve" });
});

app.listen({ host: "0.0.0.0", port }).then(() => {
  console.log(`Server on port:${port}`);
});
