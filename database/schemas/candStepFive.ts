import { Schema } from "mongoose";

// step 05 - your driving information

export const candStepFiveSchema = new Schema(
  {
    data: {
      drivingLicenceNo: { type: String },
      drivingLicenseShareCode: { type: String },
      drivingLicense: {
        frontPic: { type: String },
        backPic: { type: String },
      },
      cpcCard: {
        frontPic: { type: String },
        backPic: { type: String },
      },
      digitalDrivingTachographCard: {
        frontPic: { type: String },
        backPic: { type: String },
      },
      allInOne: {
        frontPic: { type: String },
        backPic: { type: String },
      },
      motorIncidents: {
        currentDrivingEndorsement: { type: String },
        hgvPsvCollisionYears5: { type: String },
        subjectFromTrafficCommissioner: { type: String },
        appearedBeforeTrafficCommissioner: { type: String },
        prescribedMedication: { type: String },
        sufferFromDrugs: { type: String },
        illegalSubstance: { type: String },
        reasonForIllegalSubstance: { type: String },
        randomDrugTest: { type: String },
        reasonForNoRandomDrugTest: { type: String },
        needGlassToDrive: { type: String },
        lastEyeTestDate: { type: String },
      },
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
