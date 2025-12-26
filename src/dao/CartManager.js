import CartModel from "../models/cart.model.js";

class CartManager {
  async createCart() {
    return await CartModel.create({ products: [] });
  }

  async getCartById(cid) {
    return await CartModel.findById(cid)
      .populate("products.product")
      .lean();
  }

  async addProductToCart(cid, pid) {
    const cart = await CartModel.findById(cid);
    if (!cart) return null;

    const productIndex = cart.products.findIndex(
      (p) => p.product.toString() === pid
    );

    if (productIndex !== -1) {
      cart.products[productIndex].quantity += 1;
    } else {
      cart.products.push({ product: pid, quantity: 1 });
    }

    return await cart.save();
  }

  async updateProductQuantity(cid, pid, quantity) {
    const cart = await CartModel.findById(cid);
    if (!cart) return null;

    const product = cart.products.find(
      (p) => p.product.toString() === pid
    );

    if (!product) return null;

    product.quantity = quantity;
    return await cart.save();
  }

  async replaceCart(cid, products) {
    return await CartModel.findByIdAndUpdate(
      cid,
      { products },
      { new: true }
    );
  }

  async removeProductFromCart(cid, pid) {
    return await CartModel.findByIdAndUpdate(
      cid,
      {
        $pull: { products: { product: pid } }
      },
      { new: true }
    );
  }

  async clearCart(cid) {
    return await CartModel.findByIdAndUpdate(
      cid,
      { products: [] },
      { new: true }
    );
  }
}

export default CartManager;
