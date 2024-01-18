import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import {
  createProduct,
  getAdminProducts,
  getLatestProduct,
  getProductCategory,
  getSingleProduct,
  updateProduct
} from "../controllers/product.controller.js";

const router = Router();

router
  .route("/new")
  .post(upload.fields([{ name: "photo", maxCount: 1 }]), createProduct);
router.route("/latest").get(getLatestProduct);
router.route("/category").get(getProductCategory);
router.route("/admin-products").get(getAdminProducts);

router.route("/:id").get(getSingleProduct).put(updateProduct).delete();
router.route("/gets").get();

export default router;
