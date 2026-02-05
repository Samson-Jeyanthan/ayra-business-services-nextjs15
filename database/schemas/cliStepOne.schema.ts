import { Schema } from "mongoose";

// step 01 - client company information

export const cliStepOneSchema = new Schema(
  {
    data: {
      companyLegalName: { type: String },
      tradingAs: { type: String },
      companyRegistrationNo: { type: String },
      vatNo: { type: String },
      registeredBusinessAddress: {
        street: { type: String },
        city: { type: String },
        country: { type: String },
        postCode: { type: String },
      },
      companyWebsite: { type: String },
      industry: { type: String },
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
