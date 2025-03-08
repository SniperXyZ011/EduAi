import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        trim: true
    },
    userName: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
}, {
    timestamps: true
});

export const User = mongoose.model("User", userModel);