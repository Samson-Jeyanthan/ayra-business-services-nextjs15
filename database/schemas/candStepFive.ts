import { Schema } from "mongoose";

// step 05 - your driving information

export const candStepFiveSchema = new Schema(
  {
    drivingLicenceNo: String,
    drivingLicenseShareCode: String,
    drivingLicense: {
      frontPic: String,
      backPic: String,
    },
    cpcCard: {
      frontPic: String,
      backPic: String,
    },
    digitalDrivingTachographCard: {
      frontPic: String,
      backPic: String,
    },
    allInOne: {
      frontPic: String,
      backPic: String,
    },
    motorIncidents: {
      currentDrivingEndorsement: String,
      hgvPsvCollisionYears5: String,
      subjectFromTrafficCommissioner: String,
      appearedBeforeTrafficCommissioner: String,
      prescribedMedication: String,
      sufferFromDrugs: String,
      illegalSubstance: String,
      reasonForIllegalSubstance: String,
      randomDrugTest: String,
      reasonForNoRandomDrugTest: String,
      needGlassToDrive: String,
      lastEyeTestDate: Date,
    },
  },
  { _id: false }
);
