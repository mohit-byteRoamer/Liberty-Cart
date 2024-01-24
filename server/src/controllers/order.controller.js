import { Order } from "../models/order.modal.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const newOrder = asyncHandler(async (req, res) => {
  const {
    shippingInfo,
    user,
    subTotal,
    tax,
    shippingCharges,
    discount,
    total,
    status,
    orderItems,
  } = req.body;

  if (
    [
      shippingInfo,
      user,
      subTotal,
      tax,
      shippingCharges,
      discount,
      total,
      status,
      orderItems,
    ].some((val) => val == "" || val == undefined)
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const order = await Order.create({
    shippingInfo,
    user,
    subTotal,
    tax,
    shippingCharges,
    discount,
    total,
    status,
    orderItems,
  });

  res.status(200).json(new ApiResponse(200, order, "Order created successfully"));
});

export { newOrder };
