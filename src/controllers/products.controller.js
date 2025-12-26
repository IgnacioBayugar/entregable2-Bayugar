import ProductManager from "../dao/ProductManager.js";

const productManager = new ProductManager();

export const getProducts = async (req, res) => {
  try {
    const result = await productManager.getProducts(req.query);

    res.json({
      status: "success",
      payload: result.docs,
      totalPages: result.totalPages,
      prevPage: result.prevPage,
      nextPage: result.nextPage,
      page: result.page,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
      prevLink: result.hasPrevPage
        ? `/api/products?page=${result.prevPage}`
        : null,
      nextLink: result.hasNextPage
        ? `/api/products?page=${result.nextPage}`
        : null
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productManager.getProductById(req.params.pid);

    if (!product) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }

    res.json({ status: "success", payload: product });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { title, description, price, code, stock, category } = req.body;

    if (
      !title ||
      !description ||
      !price ||
      !code ||
      !stock ||
      !category
    ) {
      return res.status(400).json({
        status: "error",
        message: "Faltan campos obligatorios"
      });
    }

    if (typeof price !== "number" || typeof stock !== "number") {
      return res.status(400).json({
        status: "error",
        message: "Price y stock deben ser numeros"
      });
    }

    const product = await productManager.createProduct(req.body);

    res.status(201).json({
      status: "success",
      payload: product
    });
  } catch (error) {
    next(error);
  }
};


export const updateProduct = async (req, res) => {
  try {
    const updated = await productManager.updateProduct(
      req.params.pid,
      req.body
    );

    if (!updated) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }

    res.json({ status: "success", payload: updated });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await productManager.deleteProduct(req.params.pid);

    if (!deleted) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }

    res.json({ status: "success", message: "Product deleted" });
  } catch (error) {
    next(error);
  }
};
