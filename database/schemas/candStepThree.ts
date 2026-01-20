import { Schema } from "mongoose";

// step 03 - criminal convictions information

export const candStepThreeSchema = new Schema(
  {
    data: {
      criminalCautionAct1974: { type: Boolean },
      reasonForAct1974: { type: String },
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
