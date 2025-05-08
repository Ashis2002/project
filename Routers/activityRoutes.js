import express from "express";
import { addActivity, getAllActivities } from "../Controllers/activityController.js";
import { isAuthoriser } from "../Middlewares/auth.js";

const router = express.Router();

router.post("/add/activitie",isAuthoriser, addActivity);
router.get("/activities", getAllActivities);

export default router;
