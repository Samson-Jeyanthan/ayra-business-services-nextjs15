import { Schema } from "mongoose";

// step 02 - contact information

export const cliStepTwoSchema = new Schema(
  {
    data: {
      primaryContact: {
        fullName: { type: String, required: true },
        jobTitle: { type: String, required: true },
        address: { type: String, required: true },
        email: { type: String, required: true },
        phoneNo: { type: String, required: true },
      },
      sameAsPrimary: { type: Boolean, enum: [true, false] },
      billingContact: {
        fullName: { type: String, required: true },
        address: { type: String, required: true },
        email: { type: String, required: true },
        phoneNo: { type: String, required: true },
      },
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
