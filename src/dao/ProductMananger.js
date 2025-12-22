import ProductModel from "../models/product.model.js";

class ProductManager {
  async getProducts({ limit = 10, page = 1, sort, category, status }) {
    const query = {};

    if (category) {
      query.category = category;
    }

    if (status !== undefined) {
      query.status = status === "true";
    }

    const options = {
      limit: Number(limit),
      page: Number(page),
      lean: true
    };

    if (sort) {
      options.sort = { price: sort === "asc" ? 1 : -1 };
    }

    return await ProductModel.paginate(query, options);
  }

  async getProductById(pid) {
    return await ProductModel.findById(pid).lean();
  }

  async createProduct(productData) {
    return await ProductModel.create(productData);
  }

  async updateProduct(pid, updateData) {
    return await ProductModel.findByIdAndUpdate(pid, updateData, {
      new: true
    });
  }

  async deleteProduct(pid) {
    return await ProductModel.findByIdAndDelete(pid);
  }
}

export default ProductManager;
