import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    first_name: {
      type: "String",
    },
    address: {
      street: {
        type: "String",
      },
      house_number: {
        type: "String",
      },
      postal_code: {
        type: "String",
      },
      city: {
        type: "String",
      },
      country: {
        type: "String",
      },
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
