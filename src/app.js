import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import {MONGODB_URI} from "./config/config.js";
import driverV1Router from "./routes/v1/driver.routes.js";

const app = express();
mongoose.connect(MONGODB_URI).then(value => {
    console.log(`Connected to MongoDB on host ${value.connection.host}`);
}).catch(error => {
    console.log(`Error connecting to MongoDB: ${error}`);
})


app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({limit:"10mb"}))

app.use("/api/v1/drivers", driverV1Router);

export default app;
