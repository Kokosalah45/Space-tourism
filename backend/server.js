import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }, null, 3));
});
app.get('/2', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 2 }, null, 3));
});
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

app.get('/3', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 3 }, null, 3));
});
app.listen(3000, () => console.log('Example app listening on port 3001!'));
