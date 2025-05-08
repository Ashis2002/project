import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [3, "Username must be at least 3 characters"],
    maxlength: [30, "Username must not exceed 30 characters"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"]
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^[6-9]\d{9}$/.test(v.toString());
      },
      message: "Phone number must be a valid 10-digit Indian number"
    }
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const userModel = mongoose.model("User", userSchema);
