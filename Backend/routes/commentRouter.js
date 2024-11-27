import express from "express";
const commentRouter = express.Router();

import { createComment } from "../controllers/commentController.js";

commentRouter.post('/', createComment)

export default commentRouter;
