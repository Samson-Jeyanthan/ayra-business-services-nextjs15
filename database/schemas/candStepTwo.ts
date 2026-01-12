import { Schema } from "mongoose";

// step 02 - next of information

export const candStepTwoSchema = new Schema(
  {
    fullNameOfKin: String,
    relationToYou: String,
    kinMobileNo: String,
    kinLandlineNo: String,
    kinEmail: String,
  },
  { _id: false }
);
