import { activityModel } from "../Models/activityModel.js";
import { bookingModel } from "../Models/bookingModel.js";
import { userModel } from "../Models/user.js";
import catchAsyncError from "../Utils/catchAsyncError.js";
import ErrorHandler from "../Utils/ErrorHandler.js";

export const bookActivity = catchAsyncError(async (req, res, next) => {
  const { activityId } = req.params;
  const { _id: userId } = req.user || {}; 
  

  const finalUserId = userId || req.body.userId;

  if (!finalUserId) {
    return next(new ErrorHandler("User ID is required", 400));
  }

  const user = await userModel.findById(finalUserId);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  const activity = await activityModel.findById(activityId);
  if (!activity) {
    return next(new ErrorHandler("Activity not found", 404));
  }

  // Prevent duplicate booking
  const alreadyBooked = await bookingModel.findOne({
    user: finalUserId,
    activity: activityId,
  });

  if (alreadyBooked) {
    return next(
      new ErrorHandler("You have already booked this activity", 400)
    );
  }

  const booking = await bookingModel.create({
    user: finalUserId,
    activity: activityId,
  });

  res.status(201).json({
    success: true,
    message: "Activity booked successfully",
    data: booking,
  });
});


export const getAllActivities = catchAsyncError(async (req, res, next) => {
  const activities = await activityModel
    .findById(req.user._id)
    .populate("user")  
    .populate("bookings") 
    .exec();

  if (!activities || activities.length === 0) {
    return next(new ErrorHandler("No activities found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Activities fetched successfully",
    data: activities,
  });
});
