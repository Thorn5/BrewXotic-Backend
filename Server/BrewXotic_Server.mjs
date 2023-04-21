import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = process.env.PORT || 8001
import morgan from 'morgan';
import cors from 'cors';
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 204,
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
import "../Database/BrewXotic_Client.mjs";
import customer from '../Routers/customerRouter.mjs';
import product from '../Routers/productRouter.mjs';
import order from '../Routers/orderRouter.mjs';

app.use(morgan('combined'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/api/customers', customer);
app.use('/api/products', product);
app.use('/api/orders', order);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


