import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true, // One booking doc per user
  },
  activities: [
    {
      activity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Activity",
        required: true,
      },
      bookedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

export const bookingModel = mongoose.model("Booking", bookingSchema);
