import { Schema } from "mongoose";

// step 02 - next of information

export const candStepTwoSchema = new Schema(
  {
    data: {
      fullNameOfKin: { type: String },
      relationToYou: { type: String },
      kinMobileNo: { type: String },
      kinLandlineNo: { type: String },
      kinEmail: { type: String },
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
