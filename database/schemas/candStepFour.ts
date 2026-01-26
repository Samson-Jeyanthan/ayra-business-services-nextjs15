import { Schema } from "mongoose";

// step 04 - pay information

export const candStepFourSchema = new Schema(
  {
    data: {
      nameAsOnAccount: {
        type: String,
        required: true,
        trim: true,
      },
      bankSocietyName: {
        type: String,
        required: true,
        trim: true,
      },
      accountNo: {
        type: String,
        required: true,
        // match: [/^\d{8}$/, "Account number must be 8 digits"],
      },
      sortCode: {
        type: String,
        required: true,
        // match: [/^\d{6}$/, "Sort code must be 6 digits"],
      },
      bankDetailConfirmation: {
        type: Boolean,
        required: true,
      },
      holidayMode: {
        type: String,
        enum: ["hourlyPay", "accruedForMe"],
        required: true,
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
