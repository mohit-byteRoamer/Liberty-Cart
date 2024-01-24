import { Router } from "express";
import {
  deleteOrder,
  getSingleOrder,
  myOrders,
  newOrder,
  updateOrder,
} from "../controllers/order.controller.js";

const orderRouter = Router();

orderRouter.route("/new").post(newOrder);

  
orderRouter.route("/my").get(myOrders);
orderRouter.route("/myOrder").get(myOrders);
orderRouter
  .route("/:id")
  .get(getSingleOrder)
  .put(updateOrder)
  .delete(deleteOrder);

export default orderRouter;
