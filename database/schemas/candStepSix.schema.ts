import { Schema } from "mongoose";

// step 06 - referee information
const refereeTemplate = {
  companyName: { type: String },
  position: { type: String },
  contactName: { type: String },
  address: { type: String },
  postCode: { type: String },
  phoneNo: { type: String },
  email: { type: String },
  employmentStartDate: { type: String },
  employmentEndDate: { type: String },
  approachability: { type: Boolean },
};

export const candStepSixSchema = new Schema(
  {
    data: [refereeTemplate, refereeTemplate],
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
