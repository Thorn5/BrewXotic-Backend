import express from 'express';
const router = express.Router();
import Customer from '../Models/CustomerSchema.mjs';

const collection = 

  router.get('/', (req, res) => {
    Customer.find({})
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


