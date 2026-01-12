import { Schema } from "mongoose";

// step 01 - candidate personal information

export const candStepOneSchema = new Schema(
  {
    title: String,
    firstName: String,
    lastName: String,
    dob: String,
    homeAddress: String,
    town: String,
    postCode: String,
    mobileNo: String,
    landlineNo: String,
    email: String,
    pictureOfYourself: String,
  },
  { _id: false }
);
