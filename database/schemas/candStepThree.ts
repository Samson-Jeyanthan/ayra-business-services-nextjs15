import { Schema } from "mongoose";

// step 03 - criminal convictions information

export const candStepThreeSchema = new Schema(
  {
    criminalCautionAct1974: Boolean,
    reasonForAct1974: String,
  },
  { _id: false }
);
