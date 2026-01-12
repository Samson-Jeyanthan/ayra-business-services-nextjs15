import { Schema } from "mongoose";

// step 06 - referee information
const refereeTemplate = {
  companyName: String,
  position: String,
  contactName: String,
  address: String,
  postCode: String,
  phoneNo: String,
  email: String,
  employmentStartDate: String,
  employmentEndDate: String,
  approachability: Boolean,
};

export const candStepSixSchema = new Schema(
  {
    references: [refereeTemplate, refereeTemplate],
  },
  { _id: false }
);
