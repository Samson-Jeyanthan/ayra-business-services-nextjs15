import { Schema } from "mongoose";

// step 02 - contact information

export const cliStepTwoSchema = new Schema(
  {
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
  { _id: false }
);
