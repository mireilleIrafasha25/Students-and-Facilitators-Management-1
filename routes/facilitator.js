import facilitatorcontroller from "../controllers/facilitatorcontroller.js";
import express from 'express';
const facilitatorroute=express.Router();
facilitatorroute.post("/facilitator/createfacilitator",facilitatorcontroller.createfacilitator)
facilitatorroute.get("/facilitator/listfacilitator",facilitatorcontroller.listfacilitator)
facilitatorroute.get("/facilitator/:id",facilitatorcontroller.retrievebyIdfacilitator)
facilitatorroute.get("/facilitator/emailfacilitator/:email",facilitatorcontroller.retrievebyemailfacilitator)
facilitatorroute.put("/facilitator/updatefacilitator/:id",facilitatorcontroller.updatefacilitator)
facilitatorroute.delete("/facilitator/:id",facilitatorcontroller.Removefacilitator)
export default facilitatorroute;