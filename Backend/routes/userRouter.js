import express from "express";
const userRouter = express.Router()

import { signup, signin, getUsers } from "../controllers/userController.js";

userRouter.post("/signup", signup)
userRouter.post("/signin", signin)
userRouter.get('/:id', getUsers);
userRouter.patch('/:id/:friendId', getUsers);


export default userRouter;