import User from "../models/userModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization");

        if(!token) {
            return res.status(400).json({msg: "You are not authorized "});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded) {
            return res.status(400).json({ msg: "You are not authorized "});
        }

        const user = await User.findOne({_id: decoded.id});

        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({msg: err.message});
    }
}

