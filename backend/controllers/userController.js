import { User } from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword } = req.body;
        console.log(req.body);

        if(!fullName || !userName || !password || !confirmPassword) {
            return res.status(400).json({ 
                success: false,
                msg: "Please fill in all fields" 
            });
        }

        if(password !== confirmPassword) {
            return res.status(400).json({ 
                success: false,
                msg: "Passwords do not match" 
            });
        }

        const existingUser = await User.findOne({ userName: userName });
        if(existingUser) {
            return res.status(400).json({ 
                success: false,
                msg: "Username already exists" 
            });
        }
        
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            fullName: fullName,
            userName: userName,
            password: hashPassword,
        });

        return res.status(201).json({
            success: true,
            msg: "User created successfully",
            user: {
                id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName
            }
        });
    } catch (err) {
        console.error("Registration Error:", err);
        return res.status(500).json({ 
            success: false,
            msg: "Error in registration",
            error: err.message 
        });
    }
}

export const login = async (req, res) => {
    try{
        const {userName, password} = req.body;

        if(!userName || !password) {
            return res.status(400).json({ msg: "Please fill in all fields" });
        }
    
        const user = await User.findOne({userName});
        if(!user) {
            return res.status(400).json({ msg: "Invalid username or password" , success: false });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch) {
            return res.status(400).json({ msg: "Invalid username or password" , success:false });
        }

        const userId = user.id;
        const token = await jwt.sign({ userId }, process.env.SECRET_KEY, {expiresIn : '1d'});

        return res.status(200).cookie('token', token, {maxAge : 1*24*60*60*1000}).json({
            _id : user._id,
            userName : user.userName,
            fullName : user.fullName,
        });

    }catch(err) {
        console.error(err.message);
    }
  
}

export const logout = (req, res) => {    
    try {
        res.status(200).cookie('token', "", {maxAge : 0}).json({
            msg: "Logged out successfully",
        })
    }catch (err) {
        console.error(err.message);
    }
}