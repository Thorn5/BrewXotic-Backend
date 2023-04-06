import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
      "customer_id": {
        "bsonType": "objectId"
      },
      "in_cart": {
        "bsonType": "bool"
      },
      "items": {
        "bsonType": "array",
        "items": {
          "bsonType": "object",
          "properties": {
            "product_id": {
              "bsonType": "objectId"
            },
            "quantity": {
              "bsonType": "number"
            },
            "sale_price": {
              "bsonType": "decimal"
            }
          }
        }
      },
      "status": {
        "bsonType": "string"
      }
      },
      { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;