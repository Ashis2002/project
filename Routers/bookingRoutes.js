import express from "express";
import { bookActivity } from "../Controllers/bookingController.js";
import { isAuthoriser } from "../Middlewares/auth.js";

const router = express.Router();
router.post("/booking/:activityId",isAuthoriser, bookActivity);

export default router;
