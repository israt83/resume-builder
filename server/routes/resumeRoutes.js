import express from "express";
import { createResume, deleteResume, getResumeById, getResumeByIdPublic, updateResume } from "../controllers/ResumeController.js";
import protect from "../middlewares/authMiddleware.js";
import upload from "../configs/multer.js";

const resumeRouter = express.Router();

resumeRouter.post("/create", protect, createResume);
resumeRouter.put("/update", upload.single("image"), protect, updateResume);
resumeRouter.delete("/delete/:resumeId", protect, deleteResume);
resumeRouter.get("/get/:resumeId", protect, getResumeById);
resumeRouter.get("/public/:resumeId", protect, getResumeByIdPublic);


export default resumeRouter;