// controller for enhanching a resumes professional summary
// POST: /api/ai/enhance-pro-summary

import ai from "../configs/ai.js";
import Resume from "../models/Resume.js";

export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        { role: "system", content: "You are an expert in Resume Writing.Your task is to enhance  the professional summary of a resume.The summary should be 1-2 sentences also highlight the key achievements , skills,experience and career objectives . Make it compelling and ATS-friendly.and only return text no option or anything else" 

        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });
    const enhancedContent = response.choices[0].message.content;
    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


// controller for enhanching a job description
// POST: /api/ai/enhance-job-description

export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        { role: "system", content: "You are an expert in Resume Writing.Your task is to enhance  the job description of a resume.The description should be in bullet points highlighting key responsibilities,achievements and skills using action verbs and quantifiable metrics.Make it compelling and ATS-friendly.and only return text no option or anything else" 

        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });
    const enhancedContent = response.choices[0].message.content;
    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// controller for uploading a resume to the database
// POST: /api/ai/upload-resume

export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const systemPrompt ="You are an expert AI Agent to extract data from resume."

    const userPrompt =`Extract data from the following resume text: ${resumeText}

     Provide data in the following JSON format with no additional text before or after:

     {
      professional_summary : { type: String, default:"" },
    skills : [{type: String}],
    personal_info :{
        image:{ type: String, default:"" },
        full_name : {type: String, default:"" },
        email : {type: String, default:"" },
        phone : {type: String, default:"" },
        location : {type: String, default:"" },
        profession : {type: String, default:"" },
        linkedin : {type: String, default:"" },
        website : {type: String, default:"" },
    },
    experience : [
        {
         company : {type: String },
         position : {type: String },
         start_date : {type: String },
         end_date : {type: String },
         description : {type: String },
         is_current : {type: Boolean },
        }
    ],
    project:[
        {
            name : {type: String },
            description : {type: String },
            type : {type: String },
        }
    ],
    education : [{
        institution : {type: String},
        degree : {type: String},
        field : {type: String},
        graduation_date : {type: String},
        gpa: {type: String},
    }],
     }

    `

   



    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        { role: "system", content: systemPrompt

        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      response_format:{ type:"json_object"}
    });
    const extractedData = response.choices[0].message.content;
    const parsedData = JSON.parse(extractedData);
    const newResume = await Resume.create({
      userId,
      title,
      ...parsedData,
    })
    res.json({resumeId: newResume._id})
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
