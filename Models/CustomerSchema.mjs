import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    first_name: String,
    surname: String,
    address: {
      street: String,
      house_number: String,
      postal_code: String,
      city: String,
      country: String,
    },
    contact_details: {
      cell: String,
      email: String,
      landline: String,
    },
    payment_details: {
      IBAN: String,
      bank: String,
      preferred_method: String,
    }
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
