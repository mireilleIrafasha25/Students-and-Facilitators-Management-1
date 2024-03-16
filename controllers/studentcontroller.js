import StudentModel from "../model/studentmodel.js";

const studentcontroller={
    create:async(req,res)=>
    {
        const addedstudent=await StudentModel.create(req.body)
        try{
            res.status(201).json(
                {
                    message:"student added successfully",
                    student:addedstudent
                })
        
        }
        catch(error){
            console.log(error.message)
            res.status(500).json({message:"Internal server error"})
        }
    },
    list:async(req,res)=>
    {
const allstudent=await StudentModel.find()
try{
    res.status(200).json( allstudent)
}
catch(error)
{
    console.log(error.message)
    res.status(500).json(
        {
            message:"Internal server error"
        })
}
    },
    retrievebyId: async(req,res)=>
    {
        const getbyid=await StudentModel.findById(req.params.id)
        try{
            res.status(200).json( getbyid)
        }
        catch(error)
        {
            console.log(error.message)
            res.status(500).json(
                {
                    message:"Internal server error"
                })
        }
            },
    
            retrievebyemail: async(req,res)=>
            {
                const email1=req.params.email
                const getbyemail=await StudentModel.findOne({email:email1})
                try{
                    res.status(200).json( getbyemail)
                }
                catch(error)
                {
                    console.log(error.message)
                    res.status(500).json(
                        {
                            message:"Internal server error"
                        })
                }
                    },
                    
            update: async(req,res)=>
            {
                const id=req.params.id
                const updatedstudent=await StudentModel.findByIdAndUpdate(id,req.body,{set:true})
                try{
                    res.status(200).json(updatedstudent)
                }
                catch(error)
                {
                    console.log(error.message)
                    res.status(500).json(
                        {
                            message:"Internal server error"
                        })
                }
                    },
                    
            Remove: async(req,res)=>
            {
                const id=req.params.id
                const removedstudent=await StudentModel.findByIdAndDelete(id)
                try{
                    res.status(200).json( removedstudent)
                }
                catch(error)
                {
                    console.log(error.message)
                    res.status(500).json(
                        {
                            message:"Internal server error"
                        })
                }
                    },
                
}
export default studentcontroller;