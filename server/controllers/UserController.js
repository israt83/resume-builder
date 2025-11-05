import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Resume from "../models/Resume.js";


const generateToken = (userId) => {
    const token = jwt.sign({ userId}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
    return token;
}


export const registerUser =async (req, res) => {
    try {
        const {name , email , password} = req.body;

        // check if required fields are present
        if(!name || !email || !password){
            return res.status(400).json({ message: "Missing required fields"});
        }

        // check if user already exists
        const user = await User.findOne({email});
        if (user) {
            return res.status(400).json({ message: "User already exists"});
        }

        // create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })

        // return success response with token

        const token = generateToken(newUser._id);
        newUser.password = undefined; 
        return res.status(201).json({
            message: "User created successfully",
            user: newUser,
            token
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error"});
    }
}

// user login controller


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

     
        // check if user  exists
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password"});
        }


        // check password is correct

        if(!user.comparePassword(password)){
            return res.status(400).json({ message: "Invalid email or password"});

        }


        // return success response with token

        const token = generateToken(user._id);
        user.password = undefined; 
        return res.status(200).json({
            message: "User logged in successfully",
            user: user,
            token
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error"});
    }
}


// conteroller to get user by id
// GET: /api/users/data


export const getUserById = async (req, res) => {
    try {
        const userId = req.userId;

        // check if user  exists
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // return user

        user.password = undefined;
        // return res.status(200).json({ user });
        return res.status(200).json({ success: true, user });

    } catch (error) {
        res.status(400).json({ message: error.message});
    }
}

// controller for getting user resumes
// GET: /api/users/resumes

export const getUserResumes = async (req, res) => {
    try {

        const userId = req.userId;
        
        // return user resumes 
        const resumes = await Resume.find({userId});
        return res.status(200).json({ resumes });

        
    } catch (error) {
        return res.status(400).json({ message: error.message});
    }
}
    