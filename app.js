import express from "express";
import { config } from "dotenv";
import path from "path";
import userRouter from "./Routers/user.js";
import CookieParser from "cookie-parser";
import activityRoutes from "./Routers/activityRoutes.js";
import bookingRoutes from "./Routers/bookingRoutes.js";

//configer dotenv path
config({ path: path.join(path.resolve(), "/Config/config.env") });

//creating an instance of express
export const app = express();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(CookieParser());

//routes
app.use("/users", userRouter);
app.use("/activity", activityRoutes);
app.use("/book", bookingRoutes);
