import express from 'express';
const app = express()
import dotenv from 'dotenv';
dotenv.config();
import connect from './config/db.js';
connect()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})