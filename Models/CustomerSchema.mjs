import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      house_number: {
        type: Date,
        required: true,
      },
      postal_code: {
        type: Number,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    contact_details: {
      cell: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      landline: {
        type: String,
        required: true,
      },
    },
    payment_details: {
      IBAN: {
        type: String,
        required: true,
      },
      bank: {
        type: String,
        required: true,
      },
      preferred_method: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
