import z from "zod";

export const SignInSchema = z.object({
  email: z
    .email({ message: "Please provide a valid email address." })
    .min(1, { message: "Email is required" }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long. " })
    .max(100, { message: "Password cannot exceed 100 characters." }),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(30, { message: "Username cannot exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
    }),

  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces.",
    }),

  email: z
    .email({ message: "Please provide a valid email address." })
    .min(1, { message: "Email is required." }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password cannot exceed 100 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
});

export const UserSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(30, { message: "Username cannot exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
    }),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.email().min(3),
  password: z.string(),
  userType: z.enum(["client", "canditate", "admin", "superadmin"]),
  status: z.enum(["pending", "rejected", "registered", "removed"]),
});

export const ClientReqSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  companyName: z.string().min(3),
  email: z.email(),
  phoneNo: z.string().min(3),
  message: z.string().min(3),
});

export const CandidateReqSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.email().min(3),
  phoneNo: z.string().min(3),
  address: z.string().min(3),
  prefferedRole: z.string().min(3),
  prefferedEmploymentStatus: z.string().min(3),
  typeOfWork: z.string().min(3),
});

export const AdminLoginSchema = z.object({
  email: z.email().min(3),
  password: z.string().min(3),
});

export const CandidRegOneSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  firstName: z.string().min(3, {
    message: "First name must be at least 3 characters.",
  }),
  lastName: z.string().min(3, {
    message: "Last name must be at least 3 characters.",
  }),
  dob: z.date({
    message: "Date of birth is required.",
  }),
  homeAddress: z.string().min(10, {
    message: "Home address must be at least 10 characters.",
  }),
  town: z.string().min(3, {
    message: "Town must be at least 3 characters.",
  }),
  postCode: z.string().min(3, {
    message: "Post code must be at least 3 characters.",
  }),
  mobileNo: z.string().regex(/^\d{10,15}$/, {
    message: "Mobile number must be 10–15 digits.",
  }),
  landlineNo: z
    .string()
    .regex(/^\d{10,15}$/, {
      message: "Landline number must be 10–15 digits.",
    })
    .optional(),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  pictureOfYourself: z.custom<File[]>(),
});

export const CandidRegTwoSchema = z.object({
  fullNameOfKin: z.string().min(3, { message: "First name is required." }),
  relationToYou: z.string().min(3, { message: "Last name is required." }),
  kinMobileNo: z.string().min(10),
  kinLandlineNo: z.string().min(10),
  kinEmail: z.email().min(3),
});

export const CandidRegThreeSchema = z.object({
  criminalCautionAct1974: z.boolean(),
  reasonForAct1974: z.string(),
});

export const CandidRegFourSchema = z.object({
  nameAsOnAccount: z.string(),
  bankSocietyName: z.string(),
  accountNo: z.number(),
  sortCode: z.number(),
  bankDetailConfirmation: z.string(),
  holidayMode: z.boolean(),
});

export const CandidRegFiveSchema = z.object({
  drivingLicenceNo: z.string(),
  drivingLicenseShareCode: z.string(),
  drivingLicense: z.object({
    frontPic: z.custom<File[]>().optional(),
    backPic: z.custom<File[]>().optional(),
  }),
  cpcCard: z.object({
    frontPic: z.custom<File[]>().optional(),
    backPic: z.custom<File[]>().optional(),
  }),
  digitalDrivingTachographCard: z.object({
    frontPic: z.custom<File[]>().optional(),
    backPic: z.custom<File[]>().optional(),
  }),
  allInOne: z.object({
    frontPic: z.custom<File[]>().optional(),
    backPic: z.custom<File[]>().optional(),
  }),
  motorIncidents: z.object({
    currentDrivingEndorsement: z.string(),
    hgvPsvCollisionYears5: z.string(),
    subjectFromTrafficCommissioner: z.string(),
    appearedBeforeTrafficCommissioner: z.string(),
    prescribedMedication: z.string(),
    sufferFromDrugs: z.string(),
    illegalSubstance: z.string(),
    reasonForIllegalSubstance: z.string(),
    randomDrugTest: z.string(),
    reasonForNoRandomDrugTest: z.string(),
    needGlassToDrive: z.string(),
    lastEyeTestDate: z.date({
      message: "Last eye test date is required.",
    }),
  }),
});

export const CandidRegSixSchema = z.object({
  references: z
    .array(
      z.object({
        companyName: z.string(),
        position: z.string(),
        contactName: z.string(),
        address: z.string(),
        postCode: z.string(),
        phoneNo: z.string(),
        email: z.string(),
        employmentStartDate: z.string(),
        employmentEndDate: z.string(),
        approachability: z.boolean(),
      })
    )
    .max(2),
});

export const CandidRegSevenSchema = z.object({
  preferences: z
    .array(
      z.object({
        adrTanks: z.boolean(),
        adrPackages: z.boolean(),
        bullTanker: z.boolean(),
        carTransporters: z.boolean(),
        container: z.boolean(),
        curtainSideOrTautliner: z.boolean(),
        doubleDecker: z.boolean(),
        flatBedOrLowLoader: z.boolean(),
        freezer: z.boolean(),
        fridge: z.boolean(),
        gravityPumpOrCompressor: z.boolean(),
        handBall: z.boolean(),
        haibGrab: z.boolean(),
        hookLift: z.boolean(),
        leftHandDrive: z.boolean(),
        moffat: z.boolean(),
        multiDrop: z.boolean(),
        nonHazTankers: z.boolean(),
        pallestised: z.boolean(),
        pdpPetrol: z.boolean(),
        rollCages: z.boolean(),
        ropingAndSheeting: z.boolean(),
        shunting: z.boolean(),
        bitumen: z.boolean(),
        tailLift: z.boolean(),
        tipper: z.boolean(),
        tramping: z.boolean(),
        trunking: z.boolean(),
        tug: z.boolean(),
        vaccumTankers: z.boolean(),
        wagAndDrag: z.boolean(),
        walkingFloors: z.boolean(),

        // FIXED: must be a Zod object
        preferredShiftPatterns: z.object({
          days: z.boolean(),
          nights: z.boolean(),
          nightsOut: z.boolean(),
          tramper: z.boolean(),
        }),
      })
    )
    .max(1),
  preferredStartedTimeWindow: z.string(),
});

export const CandidRegEightSchema = z.object({
  drivingLicenseInfo: z.boolean(),
  payInfo: z.boolean(),
  contactInfo: z.boolean(),
  medicalInfo: z.boolean(),
  criminalConvictionsInfo: z.boolean(),
  rightToWorkInfo: z.boolean(),
});

export const CandidRegNineSchema = z.object({
  nationalInsuranceNo: z.string(),
  sex: z.string(),
  p45File: z.custom<File[]>(),
  employeeStatus: z.string(),
  studentLoans: z.object({
    dontHaveLoan: z.boolean(),
    haveLoan: z.boolean(),
    havePlanOneLoan: z.boolean(),
    havePlanTwoLoan: z.boolean(),
    havePlanFourLoan: z.boolean(),
    havePostgraduateLoan: z.boolean(),
  }),
});

// client

export const CliRegOneSchema = z.object({
  companyLegalName: z.string(),
  tradingAs: z.string(),
  companyRegistrationNo: z.string(),
  vatNo: z.string(),
  registeredBusinessAddress: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
    postCode: z.string(),
  }),
  companyWebsite: z.string(),
  industry: z.string(),
});

export const CliRegTwoSchema = z.object({
  primaryContact: z.object({
    fullName: z.string(),
    jobTitle: z.string(),
    address: z.string(),
    email: z.string(),
    phoneNo: z.string(),
  }),
  sameAsPrimary: z.boolean(),
  billingContact: z.object({
    fullName: z.string(),
    address: z.string(),
    email: z.string(),
    phoneNo: z.string(),
  }),
});

export const CliRegThreeSchema = z.object({
  jobInformation: z.object({
    jobTitle: z.string(),
    department: z.string(),
    reportingTo: z.string(),
    locationOfWork: z.string(),
  }),
  employmentTerms: {
    typeOfPosition: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    workingTimeType: z.string(),
    workingHours: z.string(),
    workSchedule: z.string(),
  },
  compensations: {
    salaryRangeFrom: z.number(),
    salaryRangTo: z.number(),
    hourlyRate: z.number(),
    isBonusCommission: z.boolean(),
    ifYesBonusCommission: z.string(),
    keyBenefitsOffered: z.string(),
  },
  roleAndCandidateProfile: {
    mainResponsibilities: z.string(),
    essentialSkills: z.string(),
    desirableSkills: z.string(),
    requiredQualifications: z.string(),
    keySoftSkills: z.string(),
  },
});

export const CliRegFourSchema = z.object({
  intendedInterviewProcess: z.string(),
  deadlineForCandidate: z.date(),
});

export const CliRegFiveSchema = z.object({
  authorizedPersonName: z.string(),
  jobTitle: z.string(),
  signature: z.string(),
  date: z.date(),
});
