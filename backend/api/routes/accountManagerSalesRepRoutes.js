import express from "express";
//import controllers
import { submitRequest } from "../controllers/accountManagerSalesRepController.js";

const router = express.Router();

//routes
router.post("/submit-request", submitRequest);
export default router;
