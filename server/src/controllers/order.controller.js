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

  res
    .status(200)
    .json(new ApiResponse(200, order, "Order created successfully"));
});

const getSingleOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(404, "Provide valid order id");
  }
  console.log("asdasdasdasdasdaa");
  const order = await Order.findById(id);

  if (!order) {
    throw new ApiError(404, "Invalid Order id");
  }

  await res
    .status(200)
    .json(new ApiResponse(200, order, "Order Fetched Successfully"));
});

const updateOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id, "updateOrder");
  if (!id) {
    throw new ApiError(404, "Provide valid order id");
  }
  const {
    shippingInfo,
    subTotal,
    tax,
    shippingCharges,
    discount,
    total,
    status,
    orderItems,
  } = req.body;

  const order = await Order.findById(id);

  if (!order) {
    throw new ApiError(404, "Invalid Order id");
  }

  if (shippingInfo) order.shippingInfo = shippingInfo;
  if (subTotal) order.subTotal = subTotal;
  if (tax) order.tax = tax;
  if (shippingCharges) order.shippingCharges = shippingCharges;
  if (discount) order.discount = discount;
  if (total) order.total = total;
  if (status) order.status = status;
  if (orderItems) order.orderItems = orderItems;

  await order.save();

  res
    .status(200)
    .json(new ApiResponse(200, order, "Order updated successfully"));
});

const deleteOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id, "updateOrder");
  if (!id) {
    throw new ApiError(404, "Provide valid order id");
  }

  const order = await Order.findById(id);

  if (!order) {
    throw new ApiError(404, "Invalid Order id");
  }

  await Order.findByIdAndDelete(id);

  await res
    .status(200)
    .json(new ApiResponse(200, order, "Order Deleted Successfully"));
});

const myOrders = asyncHandler(async (req, res) => {
  console.log("MOHIT");
  const { id } = req.query; // Change 'id' here
  console.log(id, "my");
  if (!id) {
    throw new ApiError(404, "Provide a valid User id");
  }

  const orders = await Order.find({ user: id }); // Use 'id' here

  if (orders.length === 0) {
    throw new ApiError(404, "No orders found for the specified user.");
  }

  res
    .status(200)
    .json(new ApiResponse(200, orders, "My Orders Fetched Successfully"));
});

export { newOrder, updateOrder, deleteOrder, getSingleOrder, myOrders };
