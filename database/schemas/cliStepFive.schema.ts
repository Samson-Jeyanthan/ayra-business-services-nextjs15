import { Schema } from "mongoose";

// step - 05 - agreement & authourization

export const cliStepFiveSchema = new Schema(
  {
    data: {
      authorizedPersonName: { type: String, required: true },
      jobTitle: { type: String, required: true },
      signature: { type: String },
      date: { type: String, required: true },
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
