import { Schema } from "mongoose";

// step 09 - new starter declaration information

export const candStepNineSchema = new Schema(
  {
    nationalInsuranceNo: String,
    sex: String,
    p45File: String,
    employeeStatus: String,
    studentLoans: {
      dontHaveLoan: Boolean,
      haveLoan: Boolean,
      havePlanOneLoan: Boolean,
      havePlanTwoLoan: Boolean,
      havePlanFourLoan: Boolean,
      havePostgraduateLoan: Boolean,
    },
  },
  { _id: false }
);
