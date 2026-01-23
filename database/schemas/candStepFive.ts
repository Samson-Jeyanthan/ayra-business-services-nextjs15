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
        isHgvPsvCollisionYears5: { type: Boolean },
        isSubjectFromTrafficCommissioner: { type: Boolean },
        isAppearedBeforeTrafficCommissioner: { type: Boolean },
        isPrescribedMedication: { type: Boolean },
        isSufferFromDrugs: { type: Boolean },
        isIllegalSubstance: { type: Boolean },
        reasonForIllegalSubstance: { type: String },
        isRandomDrugTest: { type: Boolean },
        reasonForNoRandomDrugTest: { type: String },
        isNeedGlassToDrive: { type: Boolean },
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
