import mongoose from "mongoose";

const Employeeschema = new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    isManager:Boolean
})

export const Employee = mongoose.model('Employee',Employeeschema)