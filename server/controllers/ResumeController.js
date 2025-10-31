// controller for creating a new resume
// POST: /api/resumes/create

import imagekit from "../configs/imageKit.js";
import Resume from "../models/Resume.js";
import fs from "fs";

export const createResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { title } = req.body;

    // create new resume
    const newResume = await Resume.create({
      userId,
      title,
    });

    return res
      .status(201)
      .json({ message: "Resume created successfully", resume: newResume });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// controller for resume delete
// DELETE: /api/resumes/:id

export const deleteResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    await Resume.findOneAndDelete({ _id: resumeId, userId });

    return res
      .status(200)
      .json({ message: "Resume deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get user resume by id
// GET: /api/resumes/get/:id

export const getResumeById = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ _id: resumeId, userId });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    resume.__v = undefined; 
    resume.createdAt = undefined; 
    resume.updatedAt = undefined;
 
    return res.status(200).json({ resume });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// get resume by id public
// GET: /api/resumes/public

export const getResumeByIdPublic = async (req, res) => {
    try {
        const { resumeId } = req.params;
        const resume = await Resume.findOne({ public: true, _id: resumeId });

        if (!resume) {
            return res.status(404).json({ message: "Resume not found" });
        }

        return res.status(200).json({ resume });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


// controller for updating resume
// PUT: /api/resumes/update

export const updateResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId , resumeData, removeBackground } = req.body;
        const image = req.file;

        let resumeDataCopy = JSON.parse(JSON.stringify(resumeData));

        // handle image upload if image is present
        if (image) {

            const imageBufferData = fs.createReadStream(image.path);

            const response = await imagekit.files.upload({
                file: imageBufferData,
                fileName: "file-name.jpg",
                folder: "user-resumes",
                transformation: {
                    pre: "w-300,h-300,fo-face , z-0.75" + (removeBackground ? ",e-bgremove" : "")
                }
            });

            resumeDataCopy.personal_info.image = response.url
        }
        const resume = await Resume.findOneAndUpdate({ _id: resumeId, userId},resumeDataCopy, { new: true });

        return res.status(200).json({ message: "Resume saved successfully", resume });

     
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}