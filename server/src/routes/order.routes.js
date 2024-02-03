import { Router } from "express";
import {
  deleteOrder,
  getAllOrders,
  getSingleOrder,
  myOrders,
  newOrder,
  processOrders,
  updateOrder,
} from "../controllers/order.controller.js";

const orderRouter = Router();

orderRouter.route("/new").post(newOrder);
orderRouter.route("/my").get(myOrders);
orderRouter.route("/allOrder").get(getAllOrders);
orderRouter.route("/process/:id").patch(processOrders);

orderRouter
  .route("/:id")
  .get(getSingleOrder)
  .put(updateOrder)
  .delete(deleteOrder);

export default orderRouter;
