import express from "express";
const messageRouter = express.Router();

import { createMessage } from "../controllers/messageController.js";

messageRouter.post('/', createMessage);

export default messageRouter;