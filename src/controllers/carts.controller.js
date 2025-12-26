import CartManager from "../dao/CartManager.js";

const cartManager = new CartManager();

export const createCart = async (req, res) => {
  const cart = await cartManager.createCart();
  res.status(201).json({ status: "success", payload: cart });
};

export const getCartById = async (req, res) => {
  const cart = await cartManager.getCartById(req.params.cid);

  if (!cart) {
    return res
      .status(404)
      .json({ status: "error", message: "Cart not found" });
  }

  res.json({ status: "success", payload: cart });
};

export const addProductToCart = async (req, res) => {
  const result = await cartManager.addProductToCart(
    req.params.cid,
    req.params.pid
  );

  if (!result) {
    return res
      .status(404)
      .json({ status: "error", message: "Cart not found" });
  }

  res.json({ status: "success", payload: result });
};

export const updateProductQuantity = async (req, res) => {
  const result = await cartManager.updateProductQuantity(
    req.params.cid,
    req.params.pid,
    req.body.quantity
  );

  if (!result) {
    return res
      .status(404)
      .json({ status: "error", message: "Product or cart not found" });
  }

  res.json({ status: "success", payload: result });
};

export const replaceCart = async (req, res) => {
  const result = await cartManager.replaceCart(
    req.params.cid,
    req.body.products
  );

  if (!result) {
    return res
      .status(404)
      .json({ status: "error", message: "Cart not found" });
  }

  res.json({ status: "success", payload: result });
};

export const removeProductFromCart = async (req, res) => {
  const result = await cartManager.removeProductFromCart(
    req.params.cid,
    req.params.pid
  );

  res.json({ status: "success", payload: result });
};

export const clearCart = async (req, res) => {
  const result = await cartManager.clearCart(req.params.cid);
  res.json({ status: "success", payload: result });
};
