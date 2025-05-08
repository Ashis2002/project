import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Activity title is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Activity description is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  time: {
    type: String,
    required: [true, "Time is required"],
  }
}, {
  timestamps: true,
});

export const activityModel = mongoose.model("Activity", activitySchema);
