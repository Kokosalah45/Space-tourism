import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  console.log(req.query);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }, null, 3));
});

app.get('/2', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 2 }, null, 3));
});

app.get('/3', async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    const data = await prisma.pg4e_debug.findMany();
    res.end(JSON.stringify({ d: data }, null, 3));
  } catch (e) {
    throw new Error(e);
  }
});
app.listen(3001, () => console.log('Example app listening on port 3001!'));
