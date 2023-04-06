import express from 'express';
const router = express.Router();
import Order from '../Models/OrderSchema.mjs';

const collection = 
  router.get('/', (req, res) => {
    Order.find({})
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
      Order.findById(id)
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
