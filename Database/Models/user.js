import mongoose, { Types } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
     },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const user=mongoose.model('user', userSchema);
export default user;