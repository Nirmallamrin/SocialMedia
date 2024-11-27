import express from 'express';
const app = express()
import dotenv from 'dotenv';
dotenv.config();
import connect from './config/db.js';
connect()

import cookieParser from 'cookie-parser';
import cors from "cors";

import userRouter from './routes/userRouter.js';
import postsRouter from "./routes/postsRouter.js";
import adminRouter from "./routes/adminRouter.js"
import commentRouter from './routes/commentRouter.js';
import messageRouter from './routes/messageRouter.js';

const port = process.env.PORT

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/posts", postsRouter);
app.use("/comment", commentRouter);
app.use("/message", messageRouter);


app.get('/', (req, res) => {
  res.send('Hello World!!!!!!')
});
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});