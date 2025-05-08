import { activityModel } from "../Models/activityModel.js";
import { bookingModel } from "../models/bookingModel.js";
import { userModel } from "../Models/user.js";
import catchAsyncError from "../Utils/catchAsyncError.js";

export const bookActivity = catchAsyncError(async (req, res, next) => {
  const { activityId } = req.params;
  const { _id:userId } = req.user;

  if (!userId) {
    return next(new ErrorHandler("User ID is required", 400));
  }

  const user = await userModel.findById(userId);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  const activity = await activityModel.findById(activityId);
  if (!activity) {
    return next(new ErrorHandler("Activity not found", 404));
  }

  const existingBooking = await bookingModel.findOne({ user: userId, activity: activityId });
  if (existingBooking) {
    return next(new ErrorHandler("Activity already booked by this user", 400));
  }

  const booking = await bookingModel.create({
    user: userId,
    activity: activityId,
  });

  res.status(201).json({
    success: true,
    message: "Activity booked successfully",
    booking,
  });
});
