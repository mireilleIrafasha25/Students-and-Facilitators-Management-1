import studentcontroller from "../controllers/studentcontroller.js";
import express from 'express';
const route=express.Router();
route.post("/student/create",studentcontroller.create)
route.get("/student/list",studentcontroller.list)
route.get("/student/:id",studentcontroller.retrievebyId)
route.get("/student/email/:email",studentcontroller.retrievebyemail)
route.put("/student/update/:id",studentcontroller.update)
route.delete("/student/:id",studentcontroller.Remove)
export default route;