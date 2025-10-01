import { model, models, Schema } from "mongoose";

export interface ICandidateApplication {
  userId: Schema.Types.ObjectId;
  candidateReqId: Schema.Types.ObjectId;
  // step 01 - basic info
  stepOne: {
    title: string;
    firstName: string;
    lastName: string;
    dob: string;
    homeAddress: string;
    town: string;
    postCode: string;
    mobileNo: string;
    landlineNo: string;
    email: string;
    pictureOfYourself: string;
  };
  // step 02 - next of kin
  stepTwo: {
    fullNameOfKin: string;
    relationToYou: string;
    kinMobileNo: string;
    kinLandlineNo: string;
    kinEmail: string;
  };
  // step 03 - criminal convictions
  stepThree: {
    criminalCautionAct1974: boolean;
    reasonForAct1974: string;
  };
  // step 04 - pay
  stepFour: {
    nameAsOnAccount: string;
    bankSocietyName: string;
    accountNo: string;
    sortCode: string;
    bankDetailConfirmation: boolean;
    holidayMode: string;
  };
  // step 05 - your driving
  stepFive: {
    drivingLicenceNo: string;
    drivingLicenseShareCode: string;
    drivingLicense: {
      frontPic: string;
      backPick: string;
    };
    cpcCard: {
      frontPic: string;
      backPick: string;
    };
    digitalDrivingTacographCard: {
      frontPic: string;
      backPick: string;
    };
    allInOne: {
      frontPic: string;
      backPick: string;
    };
    motorIncidents: {
      currentDrivingEndorsement: string;
      hgvPsvCollisionYears5: boolean;
      subjectFromTrafficCommissioner: boolean;
      appearedBeforeTrafficCommissioner: boolean;
      prescribedMedication: boolean;
      sufferFromDrugs: boolean;
      illegalSubstance: boolean;
      reasonForIllegalSubstance: string;
      needGlassToDrive: string;
      lastEyeTestDate: string;
    };
  };
  // step 06 - references X 2
  stepSixReferences: [
    {
      companyName: string;
      position: string;
      contactName: string;
      address: string;
      postCode: string;
      phoneNo: string;
      email: string;
      employmentStartDate: string;
      employmentEndDate: string;
      approachability: string;
    },
  ];
  // step 07 - preferences
  stepSeven: {
    adrTanks: boolean;
    adrPackages: boolean;
    bullTanker: boolean;
    carTransporters: boolean;
    container: boolean;
    curtainSideOrTautliner: boolean;
    doubleDecker: boolean;
    flatBedOrLowLoader: boolean;
    freezer: boolean;
    fridge: boolean;
    gravityPumpOrCompressor: boolean;
    handBall: boolean;
    haibGrab: boolean;
    hookLift: boolean;
    leftHandDrive: boolean;
    moffat: boolean;
    multiDrop: boolean;
    nonHazTankers: boolean;
    pallestised: boolean;
    pdpPetrol: boolean;
    rollCages: boolean;
    ropingAndSheeting: boolean;
    shunting: boolean;
    bitumen: boolean;
    tailLift: boolean;
    tipper: boolean;
    tramping: boolean;
    trunking: boolean;
    tug: boolean;
    vaccumTankers: boolean;
    wagAndDrag: boolean;
    walkingFloors: boolean;
    preferredShiftPatterns: {
      days: boolean;
      nights: boolean;
      nightsOut: boolean;
      tramper: boolean;
    };
    preferredStartedTimeWindow: boolean;
  };
  // step 08 - data protection & privacy
  stepEight: {
    drivingLicenseInfo: string;
    payInfo: string;
    contactInfo: string;
    medicalInfo: string;
    criminalConvictionsInfo: string;
    rightToWorkInfo: string;
  };
  // step 09 - new starter declaration
  stepNine: {
    nationalInsuranceNo: string;
    sex: string;
    p45File: string;
    employeeStatus: string;
    studentLoans: string;
  };
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const CandidateApplicationSchema = new Schema<ICandidateApplication>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  candidateReqId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "CandidateReq",
  },
  // step 01 - basic info
  stepOne: {
    title: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: String, required: true },
    homeAddress: { type: String, required: true },
    town: { type: String, required: true },
    postCode: { type: String, required: true },
    mobileNo: { type: String, required: true },
    landlineNo: { type: String, required: true },
    email: { type: String, required: true },
    pictureOfYourself: { type: String, required: true },
  },
  // step 02 - next of kin
  stepTwo: {
    fullNameOfKin: { type: String },
    relationToYou: { type: String },
    kinMobileNo: { type: String },
    kinLandlineNo: { type: String },
    kinEmail: { type: String },
  },
  // step 03 - criminal convictions
  stepThree: {
    criminalCautionAct1974: { type: Boolean },
    reasonForAct1974: { type: String },
  },
  // step 04 - pay
  stepFour: {
    nameAsOnAccount: { type: String },
    bankSocietyName: { type: String },
    accountNo: { type: String },
    sortCode: { type: String },
    bankDetailConfirmation: { type: Boolean },
    holidayMode: { type: String },
  },
  // step 05 - your driving
  stepFive: {
    drivingLicenceNo: { type: String },
    drivingLicenseShareCode: { type: String },
    drivingLicense: {
      frontPic: { type: String },
      backPick: { type: String },
    },
    cpcCard: {
      frontPic: { type: String },
      backPick: { type: String },
    },
    digitalDrivingTacographCard: {
      frontPic: { type: String },
      backPick: { type: String },
    },
    allInOne: {
      frontPic: { type: String },
      backPick: { type: String },
    },
    motorIncidents: {
      currentDrivingEndorsement: { type: String },
      hgvPsvCollisionYears5: { type: Boolean },
      subjectFromTrafficCommissioner: { type: Boolean },
      appearedBeforeTrafficCommissioner: { type: Boolean },
      prescribedMedication: { type: Boolean },
      sufferFromDrugs: { type: Boolean },
      illegalSubstance: { type: Boolean },
      reasonForIllegalSubstance: { type: String },
      needGlassToDrive: { type: String },
      lastEyeTestDate: { type: String },
    },
  },
  // step 06 - references X 2
  stepSixReferences: [
    {
      companyName: { type: String },
      position: { type: String },
      contactName: { type: String },
      address: { type: String },
      postCode: { type: String },
      phoneNo: { type: String },
      email: { type: String },
      employmentStartDate: { type: String },
      employmentEndDate: { type: String },
      approachability: { type: String },
    },
  ],
  // step 07 - preferences
  stepSeven: {
    adrTanks: { type: Boolean },
    adrPackages: { type: Boolean },
    bullTanker: { type: Boolean },
    carTransporters: { type: Boolean },
    container: { type: Boolean },
    curtainSideOrTautliner: { type: Boolean },
    doubleDecker: { type: Boolean },
    flatBedOrLowLoader: { type: Boolean },
    freezer: { type: Boolean },
    fridge: { type: Boolean },
    gravityPumpOrCompressor: { type: Boolean },
    handBall: { type: Boolean },
    haibGrab: { type: Boolean },
    hookLift: { type: Boolean },
    leftHandDrive: { type: Boolean },
    moffat: { type: Boolean },
    multiDrop: { type: Boolean },
    nonHazTankers: { type: Boolean },
    pallestised: { type: Boolean },
    pdpPetrol: { type: Boolean },
    rollCages: { type: Boolean },
    ropingAndSheeting: { type: Boolean },
    shunting: { type: Boolean },
    bitumen: { type: Boolean },
    tailLift: { type: Boolean },
    tipper: { type: Boolean },
    tramping: { type: Boolean },
    trunking: { type: Boolean },
    tug: { type: Boolean },
    vaccumTankers: { type: Boolean },
    wagAndDrag: { type: Boolean },
    walkingFloors: { type: Boolean },
    preferredShiftPatterns: {
      days: { type: Boolean },
      nights: { type: Boolean },
      nightsOut: { type: Boolean },
      tramper: { type: Boolean },
    },
    preferredStartedTimeWindow: { type: Boolean },
  },
  // step 08 - data protection & privacy
  stepEight: {
    drivingLicenseInfo: { type: String },
    payInfo: { type: String },
    contactInfo: { type: String },
    medicalInfo: { type: String },
    criminalConvictionsInfo: { type: String },
    rightToWorkInfo: { type: String },
  },
  // step 09 - new starter declaration
  stepNine: {
    nationalInsuranceNo: { type: String },
    sex: { type: String },
    p45File: { type: String },
    employeeStatus: { type: String },
    studentLoans: { type: String },
  },
  status: {
    type: String,
    required: true,
    enum: ["read", "unread", "approved", "rejected"],
    default: "unread",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const CandidateApplication =
  models?.CandidateApplication ||
  model<ICandidateApplication>(
    "CandidateApplication",
    CandidateApplicationSchema
  );

export default CandidateApplication;
