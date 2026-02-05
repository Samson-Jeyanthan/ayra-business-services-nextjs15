// server actions types

interface IClientRequestParams {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phoneNo: string;
  message: string;
}

interface ICandidateRequestParams {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  address: string;
  prefferedRole: string;
  prefferedEmploymentStatus: string;
  typeOfWork: string;
}

interface AuthCredentials {
  username: string;
  email: string;
  password: string;
}

interface ICandidateRegStepOneParams {
  title: string;
  firstName: string;
  lastName: string;
  dob: date;
  homeAddress: string;
  town: string;
  postCode: string;
  mobileNo: string;
  landlineNo?: string;
  email: string;
  pictureOfYourself: string;
}

interface ICandidateRegStepTwoParams {
  fullNameOfKin: string;
  relationToYou: string;
  kinMobileNo: string;
  kinLandlineNo: string;
  kinEmail: string;
}

interface ICandidateRegStepThreeParams {
  criminalCautionAct1974: string;
  reasonForAct1974: string;
}

interface ICandidateRegStepFourParams {
  nameAsOnAccount: string;
  bankSocietyName: string;
  accountNo: string;
  sortCode: string;
  bankDetailConfirmation: boolean;
  holidayMode: "hourlyPay" | "accruedForMe";
}

interface ICandidateRegStepFiveParams {
  drivingLicenceNo: string;
  drivingLicenseShareCode: string;
  drivingLicense: {
    frontPic: string;
    backPic: string;
  };
  cpcCard: {
    frontPic: string;
    backPic: string;
  };
  digitalDrivingTachographCard: {
    frontPic: string;
    backPic: string;
  };
  allInOne: {
    frontPic: string;
    backPic: string;
  };
  motorIncidents: {
    currentDrivingEndorsement: string;
    isHgvPsvCollisionYears5: "true" | "false";
    isSubjectFromTrafficCommissioner: "true" | "false";
    isAppearedBeforeTrafficCommissioner: "true" | "false";
    isPrescribedMedication: "true" | "false";
    isSufferFromDrugs: "true" | "false";
    isIllegalSubstance: "true" | "false";
    reasonForIllegalSubstance: string;
    isRandomDrugTest: "true" | "false";
    reasonForNoRandomDrugTest: string;
    isNeedGlassToDrive: "true" | "false";
    lastEyeTestDate: date;
  };
}

interface IRefereeTemplate {
  companyName: string;
  position: string;
  contactName: string;
  address: string;
  postCode: string;
  phoneNo: string;
  email: string;
  employmentStartDate?: date;
  employmentEndDate?: date;
  approachability: boolean;
}

interface ICandidateRegStepSixParams {
  references: IRefereeTemplate[];
}

interface IPreferenceTemplate {
  jobPrefs: {
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
  };
  preferredShiftPatterns: {
    days: boolean;
    nights: boolean;
    nightsOut: boolean;
    tramper: boolean;
  };
}

interface ICandidateRegStepSevenParams {
  preferences: IPreferenceTemplate[];
  preferredStartedTimeWindow: string;
}

interface ICandidateRegStepEightParams {
  drivingLicenseInfo: boolean;
  payInfo: boolean;
  contactInfo: boolean;
  medicalInfo: boolean;
  criminalConvictionsInfo: boolean;
  rightToWorkInfo: boolean;
}

interface ICandidateRegStepNineParams {
  nationalInsuranceNo: string;
  sex: "male" | "female";
  p45File: string;
  employeeStatus: string;
  studentLoans: {
    dontHaveLoan: boolean;
    haveLoan: boolean;
    havePlanOneLoan: boolean;
    havePlanTwoLoan: boolean;
    havePlanFourLoan: boolean;
    havePostgraduateLoan: boolean;
  };
  signature: string;
}

interface IGetUserRegInfoParams {
  userId?: string | undefined;
}

//  client registration

interface IClientRegStepOneParams {
  companyLegalName: string;
  tradingAs: string;
  companyRegistrationNo: string;
  vatNo: string;
  registeredBusinessAddress: {
    street: string;
    city: string;
    country: string;
    postCode: string;
  };
  companyWebsite?: string;
  industry: string;
}

interface IClientRegStepTwoParams {
  primaryContact: {
    fullName: string;
    jobTitle: string;
    address: string;
    email: string;
    phoneNo: string;
  };
  sameAsPrimary: boolean;
  billingContact: {
    fullName: string;
    address: string;
    email: string;
    phoneNo: string;
  };
}

interface IClientRegStepThreeParams {
  jobInformation: {
    jobTitle: string;
    department: string;
    reportingTo: string;
    locationOfWork: string;
    ifHybridDays?: string;
  };
  employmentTerms: {
    typeOfPosition: string;
    startDate: date;
    endDate?: date;
    workingTimeType: string;
    workingHours: string;
    workSchedule: string;
  };
  compensations: {
    salaryRangeFrom: string;
    salaryRangeTo: string;
    hourlyRate?: string;
    isBonusCommission: "true" | "false";
    ifYesBonusCommission?: string;
    keyBenefitsOffered: string;
  };
  roleAndCandidateProfile: {
    mainResponsibilities: string;
    essentialSkills: string;
    desirableSkills: string;
    requiredQualifications: string;
    keySoftSkills: string;
  };
}

interface IClientRegStepFourParams {
  intendedInterviewProcess: string;
  deadlineForCandidate: date;
}

interface IClientRegStepFiveParams {
  authorizedPersonName: string;
  jobTitle: string;
  signature?: string;
  date: date;
}
