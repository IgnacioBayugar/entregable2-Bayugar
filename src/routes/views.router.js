import { Router } from "express";
import ProductManager from "../dao/ProductManager.js";
import CartManager from "../dao/CartManager.js";

const router = Router();
const productManager = new ProductManager();
const cartManager = new CartManager();

// 👉 carrito fijo para la entrega
const CART_ID = "694c435242dc3b0797473b3d";

// productos con paginación
router.get("/products", async (req, res) => {
  const query = {
    ...req.query,
    limit: req.query.limit || 3,
    page: req.query.page || 1
  };

  const result = await productManager.getProducts(query);

  res.render("products", {
    products: result.docs,
    page: result.page,
    hasPrevPage: result.hasPrevPage,
    hasNextPage: result.hasNextPage,
    prevPage: result.prevPage,
    nextPage: result.nextPage,
    cartId: CART_ID
  });
});

// ver carrito
router.get("/carts/:cid", async (req, res) => {
  const cart = await cartManager.getCartById(req.params.cid);

  if (!cart) {
    return res.status(404).send("Carrito no encontrado");
  }

  res.render("cart", {
    cart
  });
});

export default router;
