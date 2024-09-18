import express from "express"
const postsRouter = express.Router()

import { createPost, getFeedPosts, getUserPosts, likePost } from "../controllers/postController.js";

postsRouter.post("/", createPost)

postsRouter.get("/", getFeedPosts);

postsRouter.get("/:userId/posts", getUserPosts);

postsRouter.get("/:id/like", likePost);

export default postsRouter;