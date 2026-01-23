import { Schema } from "mongoose";

// step 01 - candidate personal information

export const candStepOneSchema = new Schema(
  {
    data: {
      title: { type: String },
      firstName: { type: String },
      lastName: { type: String },
      dob: { type: String },
      homeAddress: { type: String },
      town: { type: String },
      postCode: { type: String },
      mobileNo: { type: String },
      landlineNo: { type: String },
      email: { type: String },
      pictureOfYourself: { type: String },
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    reviewedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    reviewedAt: {
      type: Date,
      default: null,
    },
    rejectionReason: {
      type: String,
      default: null,
    },
  },
  { _id: false }
);
