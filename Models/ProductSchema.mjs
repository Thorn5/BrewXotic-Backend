import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    _id: {
      $oid: {
        type: "ObjectId",
      },
    },
    name: {
      type: "String",
    },
    description: {
      type: "String",
    },
    images: {
      full_size: {
        type: "String",
      },
      thumbnail: {
        type: "String",
      },
    },
    price: {
      $numberDecimal: {
        type: "Number",
      },
    },
    quantity_available: {
      $numberInt: {
        type: "Number",
      },
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
