import express from "express";
import { bookActivity, getAllActivities } from "../Controllers/bookingController.js";
import { isAuthoriser } from "../Middlewares/auth.js";

const router = express.Router();
router.post("/getall",isAuthoriser, getAllActivities);
router.post("/booking/:activityId",isAuthoriser, bookActivity);


export default router;
