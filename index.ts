import express from 'express'
import {a} from './a'
const app = express();
const PORT = 8000;
app.get('/', (req: any,res:any) => res.send('Express + TypeScript Server'));

a()
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT} `);
});