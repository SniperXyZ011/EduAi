import mongoose from "mongoose";

const connnetDB = async () => { 
    try {
        await mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log("Mongoose connected");
        })
    }catch(err) {
        console.log(err);
    }
}

export default connnetDB;