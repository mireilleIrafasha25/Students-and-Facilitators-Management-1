import mongoose from "mongoose";
const schema=mongoose.Schema
const studentschema=new schema(
    {
        name:
        {
            type:String,
            required:true
        },
        email:
        {
            type:String,
            required:true,
            unique:true
        },
        phone:
        {
            type:String,
            required:true
        },
        nationalId:
        {
            type:String,
            required:true,
            unique:true,
            length:16
        },
        gender:
        {
            type:String,
            required:true,
            enum:
            {
                values:['Male','Female'],
                message:"Gender must be either Male or Female"
            }
        },
    },
    {timestamps:true}
)
const StudentModel=mongoose.model("student",studentschema)

export default StudentModel;