import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        properties: {
          _id: {
            bsonType: "objectId"
          },
          description: {
            bsonType: "string"
          },
          image: {
            bsonType: "string"
          },
          name: {
            bsonType: "string"
          },
          price: {
            bsonType: "decimal"
          },
          quantity_available: {
            bsonType: "number"
          }
        }
      },
      { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
