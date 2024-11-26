import express from "express";
import { getAllUsers, getAllPosts, getAllLikes, getAllComments } from "../controllers/adminController.js";

const adminRouter = express.Router();



adminRouter.get('/getAllUsers', getAllUsers)
adminRouter.get('/getAllPosts', getAllPosts)
adminRouter.get('/getAllComments', getAllComments)
adminRouter.get('/getAllLikes', getAllLikes)

export default adminRouter;