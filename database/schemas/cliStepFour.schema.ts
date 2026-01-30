import { Schema } from "mongoose";

// step 04 - recruitment process

export const cliStepFourSchema = new Schema(
  {
    data: {
      intendedInterviewProcess: { type: String, required: true },
      deadlineForCandidate: { type: String, required: true },
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
