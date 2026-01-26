import { Schema } from "mongoose";

// step 01 - client company information

export const cliStepOneSchema = new Schema(
  {
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
  { _id: false }
);
