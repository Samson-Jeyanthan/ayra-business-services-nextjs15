import { Schema } from "mongoose";

// step 04 - pay information

export const candStepFourSchema = new Schema(
  {
    data: {
      nameAsOnAccount: { type: String },
      bankSocietyName: { type: String },
      accountNo: { type: Number },
      sortCode: { type: Number },
      bankDetailConfirmation: { type: String },
      holidayMode: { type: Boolean },
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
