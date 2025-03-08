import { User } from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword } = req.body;
        console.log(req.body);

        if(!fullName || !userName || !password || !confirmPassword) {
            return res.status(400).json({ msg: "Please fill in all fields" });
        }

        if(password != confirmPassword) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }

        const user = User.findOne({userName});
        console.log(user.userName);
        if(!user){
            return res.status(400).json({ msg: "Username already exists" });
        }
        
        const hashPassword = await bcrypt.hash(password, 10);


        await User.create({
            fullName,
            userName,
            password : hashPassword,
        });

        return res.status(200).json({
            msg: "User created successfully",
            success : true,
        })
    } catch (err) {
        console.error(err.message);
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