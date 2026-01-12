import { Schema } from "mongoose";

// step 08 - data protect & privacy information

export const candStepEightSchema = new Schema(
  {
    drivingLicenseInfo: Boolean,
    payInfo: Boolean,
    contactInfo: Boolean,
    medicalInfo: Boolean,
    criminalConvictionsInfo: Boolean,
    rightToWorkInfo: Boolean,
  },
  { _id: false }
);
