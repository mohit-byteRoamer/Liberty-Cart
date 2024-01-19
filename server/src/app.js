import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
//routes import
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import NodeCache from "node-cache";

const app = express();
const apiVersion = "/api/v1";
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export const myCache = new NodeCache();
 //routes declaration
app.use("/api/v1/users", userRouter);
app.use(`${apiVersion}/product`, productRouter);

export { app };
