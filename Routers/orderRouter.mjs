import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import Order from "../Models/OrderSchema.mjs";

const collection = 
// router.get("/", (req, res) => {
//   Order.find({})
//     .then((data) => {
//       if (!data) {
//         return res.sendStatus(404);
//       }
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err.message);
//       res.sendStatus(500);
//     });
// });

router.get("/", (req, res) => {
  Order.aggregate([
    {
      $lookup: {
        from: 'customers',
        localField: 'customer_id',
        foreignField: '_id',
        as: 'customer'
      }
    },
    {
      $lookup: {
        from: 'products',
        localField: 'items.product_id',
        foreignField: '_id',
        as: 'products'
      }
    },
    {
      $project: {
        customer: {
          $arrayElemAt: ['$customer', 0]
        },
        items: {
          $map: {
            input: '$items',
            as: 'item',
            in: {
              product_id: '$$item.product_id',
              sale_price: '$$item.sale_price',
              quantity: '$$item.quantity',
              name: {
                $arrayElemAt: [
                  '$products.name',
                  {
                    $indexOfArray: ['$products._id', '$$item.product_id']
                  }
                ]
              },
              description: {
                $arrayElemAt: [
                  '$products.description',
                  {
                    $indexOfArray: ['$products._id', '$$item.product_id']
                  }
                ]
              },
              image: {
                $arrayElemAt: [
                  '$products.image',
                  {
                    $indexOfArray: ['$products._id', '$$item.product_id']
                  }
                ]
              },
              price: {
                $arrayElemAt: [
                  '$products.price',
                  {
                    $indexOfArray: ['$products._id', '$$item.product_id']
                  }
                ]
              }
            }
          }
        },
        in_cart: 1,
        status: 1
      }
    }
  ])
    .then((data) => {
      if (!data) {
        return res.sendStatus(404);
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });
});

// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   Order.findById(id)
//   .then(data => {
//     if (!data) {
//         return res.sendStatus(404);
//       }
//       res.json(data);
//     })
//     .catch(err => {
//       console.log(err.message);
//       res.sendStatus(500);
//     });
//   });

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Order.aggregate([
    //The first stage of the pipeline filters the collection to only include documents with the specified order ID
    {
        $match: {
            "_id": ObjectId(id)
        }
    },
    //The second stage of the pipeline joins the collection to the customers collection in order to include the customer details in the output
    {
        $lookup: {
            from: "customers",
            localField: "customer_id",
            foreignField: "_id",
            as: "customer"
        }
    },
    //The third stage of the pipeline projects the required output fields
    {
        $project: {
            _id: 1,
            in_cart: 1,
            status: 1,
            customer: {
                _id: 1,
                first_name: 1,
                surname: 1,
                address: {
                    street: 1,
                    house_number: 1,
                    postal_code: 1,
                    city: 1,
                    country: 1
                },
                contact_details: {
                    email: 1,
                    cell: 1,
                    landline: 1
                },
                payment_details: {
                    IBAN: 1,
                    bank: 1,
                    preferred_method: 1
                }
            },
            items: 1
        }
    }
])
  .then(data => {
    if (!data) {
        return res.sendStatus(404);
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err.message);
      res.sendStatus(500);
    });
  });

export default router;
