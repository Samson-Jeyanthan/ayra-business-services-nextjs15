import { Schema } from "mongoose";

// step 08 - data protect & privacy information

export const candStepEightSchema = new Schema(
  {
    data: {
      drivingLicenseInfo: { type: Boolean },
      payInfo: { type: Boolean },
      contactInfo: { type: Boolean },
      medicalInfo: { type: Boolean },
      criminalConvictionsInfo: { type: Boolean },
      rightToWorkInfo: { type: Boolean },
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
