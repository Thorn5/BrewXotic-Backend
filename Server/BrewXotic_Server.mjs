import dotenv from 'dotenv';
dotenv.config();
import "../Database/BrewXotic_Client.mjs";

import express from 'express';
const app = express();
const port = process.env.PORT || 8001 //*5050
import customer from '../Routers/customerRouter.mjs';
import morgan from 'morgan';

app.use(morgan('combined'));
app.use(express.json());
app.use('/api/customers', customer);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// http://localhost:5050/api/customers
