import facilitatorModel from "../model/studentmodel.js";

const facilitatorcontroller={
    createfacilitator:async(req,res)=>
    {
        const addedfacilitator=await facilitatorModel.create(req.body)
        try{
            res.status(201).json(
                {
                    message:"Facilitator added successfully",
                    student:addedfacilitator
                })
        
        }
        catch(error){
            console.log(error.message)
            res.status(500).json({message:"Internal server error"})
        }
    },
    listfacilitator:async(req,res)=>
    {
const allfacilitator=await facilitatorModel.find()
try{
    res.status(200).json( allfacilitator)
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
    retrievebyIdfacilitator: async(req,res)=>
    {
        const getbyid=await facilitatorModel.findById(req.params.id)
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
    
            retrievebyemailfacilitator: async(req,res)=>
            {
                const email1=req.params.email
                const getbyemail=await facilitatorModel.findOne({email:email1})
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
                    
            updatefacilitator: async(req,res)=>
            {
                const id=req.params.id
                const updatedfacilitator=await facilitatorModel.findByIdAndUpdate(id,req.body,{set:true})
                try{
                    res.status(200).json(updatedfacilitator)
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
                    
            Removefacilitator: async(req,res)=>
            {
                const id=req.params.id
                const removedfacilitator=await facilitatorModel.findByIdAndDelete(id)
                try{
                    res.status(200).json( removedfacilitator)
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
export default facilitatorcontroller;