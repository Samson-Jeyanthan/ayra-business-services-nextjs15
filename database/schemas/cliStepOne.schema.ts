import { Schema } from "mongoose";

// step 01 - client company information

export const cliStepOneSchema = new Schema(
  {
    data: {
      companyLegalName: String,
      tradingAs: String,
      companyRegistrationNo: String,
      vatNo: String,
      registeredBusinessAddress: {
        street: String,
        city: String,
        country: String,
        postCode: String,
      },
      companyWebsite: String,
      industry: String,
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
