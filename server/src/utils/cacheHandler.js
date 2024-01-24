import { myCache } from "../app.js";
import { product } from "../models/product.modal.js";

const inValidatorCache = async ({ Product, order, admin }) => {
  if (Product) {
    const productKey = ["latestProduct", "productCategory", "adminProduct"];

    const productId = await product.find({}).select("_id");
    productId.forEach((element) =>
      productKey.push(`getSingleProduct-${element._id}`)
    );
    myCache.del(productKey);
  }

  if (order) {
  }

  if (admin) {
  }
};

export { inValidatorCache };
