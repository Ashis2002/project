import { activityModel } from "../Models/activityModel.js";
import catchAsyncError from "../Utils/catchAsyncError.js";
import ErrorHandler from "../Utils/ErrorHandler.js";


export const addActivity = catchAsyncError(async (req, res, next) => {
  const { title, description, location, date, time } = req.body;

  if (!title || !description || !location || !date || !time) {
    return next(new ErrorHandler("All fields are required", 400));
  }

  const activity = await activityModel.create({
    title,
    description,
    location,
    date,
    time,
  });

  res.status(201).json({
    success: true,
    message: "Activity added successfully",
    activity,
  });
});


export const getAllActivities = catchAsyncError(async (req, res, next) => {
  const activities = await activityModel.find();

  res.status(200).json({
    success: true,
    activities,
  });
});
