import express from "express";
import { getUserById, getUserResumes, loginUser, registerUser } from "../controllers/UserController.js";
import protect from "../middlewares/authMiddleware.js";



const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post('/data', protect, getUserById);
userRouter.get('/resumes', protect, getUserResumes);

export default userRouter;