import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
//routes import
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import NodeCache from "node-cache";
import morgan from "morgan";
import orderRouter from "./routes/order.routes.js";
import bodyParser from 'body-parser'; // Importing body-parser


const app = express();
const apiVersion = "/api/v1";
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(bodyParser.json({ limit: "16kb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));

export const myCache = new NodeCache();
//routes declaration

app.use(`${apiVersion}/users`, userRouter);
app.use(`${apiVersion}/product`, productRouter);
app.use(`${apiVersion}/order`, orderRouter);

export { app };
