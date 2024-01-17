import mongoose, { Schema } from "mongoose";

const ProductModal = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required field"],
    },
    photo: {
      type: String,
      required: [true, "Product photo is required field"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required field"],
    },
    stock: {
      type: Number,
      required: [true, "Stock is required field"],
    },
    category: {
      type: String,
      required: [true, "Category is required field"],
    },
  },
  { timestamps: true }
);

export const product = mongoose.Model("product", ProductModal);
