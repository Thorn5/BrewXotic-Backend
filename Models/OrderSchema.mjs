import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
  },
  items: {
      type: [mongoose.Schema.Types.Mixed],
      required: true
  },
  in_cart: {
      type: Boolean,
      required: true
  },
  status: {
      type: String,
      required: true
  }
}, { timestamps:true });


const Order = mongoose.model("Order", OrderSchema);
export default Order;