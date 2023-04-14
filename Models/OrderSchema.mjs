import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    _id: {
      $oid: {
        type: "ObjectId",
      },
    },
    customer_id: {
      $oid: {
        type: "ObjectId",
      },
    },
    items: {
      type: ["Mixed"],
    },
    in_cart: {
      type: "Boolean",
    },
    status: {
      type: "String",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;
