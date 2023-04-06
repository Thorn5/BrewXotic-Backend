import express from 'express';
const router = express.Router();
import Product from '../Models/ProductSchema.mjs';

const collection = 
  router.get('/', (req, res) => {
    Product.find({})
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

    router.get('/:id', (req, res) => {
      const { id } = req.params;
      Product.findById(id)
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
