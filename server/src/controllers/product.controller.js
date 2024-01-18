import { product } from "../models/product.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, stock, category } = req.body;
  console.log(name, price, stock, category, "name");
  if (
    [name, price, stock, category].some((val) => val == "" || val == undefined)
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const productImage = req.file;
  console.log("product", name, price, stock, category, req.file);
  const Product = await product.create({
    name,
    price,
    stock,
    category,
    // photo: productImage?.path,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, Product, "Product Created Successfully"));
});

const getLatestProduct = asyncHandler(async (req, res) => {
  const Product = await product.find({}).sort({ createdAt: -1 }).limit(5);
  return res
    .status(200)
    .json(
      new ApiResponse(200, Product, "Latest Product Retrieved Successfully")
    );
});

const getProductCategory = asyncHandler(async (req, res) => {
  const productCategory = await product.distinct("category");
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        productCategory,
        "All Product Categories Retrieved Successfully"
      )
    );
});

const getAdminProducts = asyncHandler(async (req, res) => {
  const adminProduct = await product.find({});
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        adminProduct,
        "All Admin Products Retrieved Successfully"
      )
    );
});

const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await product.findById(id);
  return res
    .status(200)
    .json(new ApiResponse(200, product, "Product Retrieved Successfully"));
});

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, price, stock, category } = req.body;
  const productImage = req.file;
  const Product = await product.findById(id);

  if (!Product) {
    throw new ApiError(404, "Invalid Product Id");
  }
  if (name) Product.name = name;
  if (price) Product.price = price;
  if (stock) Product.stock = stock;
  if (category) Product.category = category;
  await Product.save();
  return res
    .status(200)
    .json(new ApiResponse(200, Product, "Product Updated Successfully"));
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, price, stock, category } = req.body;
  const productImage = req.file;
  const Product = await product.findById(id);

  if (!Product) {
    throw new ApiError(404, "Invalid Product Id");
  }
  if (name) Product.name = name;
  if (price) Product.price = price;
  if (stock) Product.stock = stock;
  if (category) Product.category = category;
  await Product.save();
  return res
    .status(200)
    .json(new ApiResponse(200, Product, "Product Updated Successfully"));
});

export {
  createProduct,
  getLatestProduct,
  getProductCategory,
  getAdminProducts,
  getSingleProduct,
  updateProduct,
};
