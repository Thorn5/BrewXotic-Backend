import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectionString = process.env.ATLAS_URI || "";

// Await has no effect here
mongoose
    .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => {
        console.log("Connectied to BrewXotic database");
    })
    .catch((e) => console.log(e.message));

const client = mongoose.connection;

export default client;
