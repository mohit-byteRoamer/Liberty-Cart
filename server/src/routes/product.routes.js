import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import {
  createProduct,
  deleteProduct,
  getAdminProducts,
  getAllProducts,
  getLatestProduct,
  getProductCategory,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = Router();

router
  .route("/new")
  .post(upload.fields([{ name: "photo", maxCount: 1 }]), createProduct);
router.route("/latest").get(getLatestProduct);
router.route("/category").get(getProductCategory);
router.route("/admin-products").get(getAdminProducts);

router.route("/all").get(getAllProducts);

router
  .route("/:id")
  .get(getSingleProduct)
  .put(upload.fields([{ name: "photo", maxCount: 1 }]), updateProduct)
  .delete(deleteProduct);

// router.route("/all").get(getAllProducts);

export default router;
