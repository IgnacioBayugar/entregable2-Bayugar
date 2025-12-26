import { Router } from "express";
import {
  createCart,
  getCartById,
  addProductToCart,
  updateProductQuantity,
  replaceCart,
  removeProductFromCart,
  clearCart
} from "../controllers/carts.controller.js";

const router = Router();

router.post("/", createCart);
router.get("/:cid", getCartById);
router.post("/:cid/products/:pid", addProductToCart);
router.put("/:cid", replaceCart);
router.put("/:cid/products/:pid", updateProductQuantity);
router.delete("/:cid/products/:pid", removeProductFromCart);
router.delete("/:cid", clearCart);

export default router;
