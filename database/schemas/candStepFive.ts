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
        isHgvPsvCollisionYears5: {
          type: String,
          enum: ["true", "false"],
        },
        isSubjectFromTrafficCommissioner: {
          type: String,
          enum: ["true", "false"],
        },
        isAppearedBeforeTrafficCommissioner: {
          type: String,
          enum: ["true", "false"],
        },
        isPrescribedMedication: { type: String, enum: ["true", "false"] },
        isSufferFromDrugs: { type: String, enum: ["true", "false"] },
        isIllegalSubstance: { type: String, enum: ["true", "false"] },
        reasonForIllegalSubstance: { type: String },
        isRandomDrugTest: { type: String, enum: ["true", "false"] },
        reasonForNoRandomDrugTest: { type: String },
        isNeedGlassToDrive: { type: String, enum: ["true", "false"] },
        lastEyeTestDate: { type: String },
      },
    },
    isCompleted: {
      type: Boolean,
      default: false,
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
