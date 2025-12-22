import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    thumbnail: {
      type: String,
      default: ""
    },
    code: {
      type: String,
      required: true,
      unique: true
    },
    stock: {
      type: Number,
      required: true
    },
    status: {
      type: Boolean,
      default: true
    },
    category: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// plugin de paginación
productSchema.plugin(mongoosePaginate);

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
