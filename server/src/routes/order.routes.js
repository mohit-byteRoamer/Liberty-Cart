import { Router } from "express";
import { newOrder } from "../controllers/order.controller.js";

const orderRouter = Router();

orderRouter.route("/new").post(newOrder);

export default orderRouter;
