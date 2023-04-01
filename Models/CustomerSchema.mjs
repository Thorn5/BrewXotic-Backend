import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema(
    {
        "properties": {
          "_id": {
            "bsonType": "objectId"
          },
          "address": {
            "bsonType": "object",
            "properties": {
              "city": {
                "bsonType": "string"
              },
              "country": {
                "bsonType": "string"
              },
              "house_number": {
                "bsonType": "string"
              },
              "postal_code": {
                "bsonType": "number"
              },
              "street": {
                "bsonType": "string"
              }
            }
          },
          "contact_details": {
            "bsonType": "object",
            "properties": {
              "cell": {
                "bsonType": "string"
              },
              "email": {
                "bsonType": "string"
              },
              "landline": {
                "bsonType": "string"
              }
            }
          },
          "first_name": {
            "bsonType": "string"
          },
          "payment_details": {
            "bsonType": "object",
            "properties": {
              "IBAN": {
                "bsonType": "string"
              },
              "bank": {
                "bsonType": "string"
              },
              "preferred_method": {
                "bsonType": "string"
              }
            }
          },
          "surname": {
            "bsonType": "string"
          },
          
        }
      }
)

const Customer = mongoose.model('Customer', CustomerSchema);
export default Customer;


