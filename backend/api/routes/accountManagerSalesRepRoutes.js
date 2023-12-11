import express from "express";
//import controllers
import { submitRequest } from "../controllers/accountManagerSalesRepController.js";

const router = express.Router();

//routes
router.post("/create-request", submitRequest);
export default router;
