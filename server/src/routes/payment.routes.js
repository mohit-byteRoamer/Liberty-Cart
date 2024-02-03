import { Router } from "express";
import {
  applyDiscount,
  createCoupon,
  deleteCoupon,
  getAllCoupon,
} from "../controllers/payment.controller.js";

const paymentRouter = Router();

paymentRouter.route("/coupon-create").post(createCoupon);
paymentRouter.route("/discount").get(applyDiscount);
paymentRouter.route("/all-coupons").get(getAllCoupon);
paymentRouter.route("/:id").get().delete(deleteCoupon);

export default paymentRouter;
