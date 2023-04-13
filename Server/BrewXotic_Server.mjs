import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = process.env.PORT || 8001
import morgan from 'morgan';
import cors from 'cors';
import "../Database/BrewXotic_Client.mjs";
import customer from '../Routers/customerRouter.mjs';
import product from '../Routers/productRouter.mjs';
import order from '../Routers/orderRouter.mjs';

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use('/api/customers', customer);
app.use('/api/products', product);
app.use('/api/orders', order);

//? Would await have any effect here?
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// http://localhost:5050/api/customers
// http://localhost:5050/api/customers/642dd09c163feb4a07959851
// http://localhost:5050/api/customers/lookupfirstname/Schneewittchen
// http://localhost:5050/api/products
// http://localhost:5050/api/products/642dd5c3163feb4a0795985e
// http://localhost:5050/api/orders
// http://localhost:5050/api/orders/642dfd6272b64c7447006cb9

