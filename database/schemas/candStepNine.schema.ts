import { Schema } from "mongoose";

// step 09 - new starter declaration information

export const candStepNineSchema = new Schema(
  {
    data: {
      nationalInsuranceNo: { type: String },
      sex: { type: String },
      p45File: { type: String },
      employeeStatus: { type: String },
      studentLoans: {
        dontHaveLoan: { type: Boolean },
        haveLoan: { type: Boolean },
        havePlanOneLoan: { type: Boolean },
        havePlanTwoLoan: { type: Boolean },
        havePlanFourLoan: { type: Boolean },
        havePostgraduateLoan: { type: Boolean },
      },
      signature: { type: String },
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
