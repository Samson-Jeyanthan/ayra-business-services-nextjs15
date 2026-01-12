import { Schema } from "mongoose";

// step 04 - pay information

export const candStepFourSchema = new Schema(
  {
    nameAsOnAccount: String,
    bankSocietyName: String,
    accountNo: Number,
    sortCode: Number,
    bankDetailConfirmation: String,
    holidayMode: Boolean,
  },
  { _id: false }
);
