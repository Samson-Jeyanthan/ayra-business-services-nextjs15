import z from "zod";

export const SignInSchema = z.object({
  email: z
    .email({ message: "Please provide a valid email address." })
    .min(1, { message: "Email address is required" }),
  password: z.string().min(1, { message: "Password is required. " }),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(30, { message: "Username cannot exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
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
  email: z
    .email({
      message: "Please enter a valid email address.",
    })
    .min(3, { message: "Email address is required" }),
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
  email: z
    .email({
      message: "Please enter a valid email address.",
    })
    .min(3, { message: "Email address is required" }),
  phoneNo: z.string().min(3),
  address: z.string().min(3),
  prefferedRole: z.string().min(3),
  prefferedEmploymentStatus: z.string().min(3),
  typeOfWork: z.string().min(3),
});

export const AdminLoginSchema = z.object({
  email: z
    .email({
      message: "Please enter a valid email address.",
    })
    .min(3, { message: "Email address is required" }),
  password: z.string().min(3, { message: "Password is required" }),
});

// candidate multistep form schema

export const CandidRegOneSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  firstName: z.string().min(3, {
    message: "First name must be at least 3 characters.",
  }),
  lastName: z.string().min(3, {
    message: "Last name must be at least 3 characters.",
  }),
  dob: z
    .date()
    .nullable()
    .refine((val) => val !== null, {
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
  email: z
    .email({
      message: "Please enter a valid email address.",
    })
    .min(3, { message: "Email address is required" }),
  pictureOfYourself: z.custom<File[]>(),
});

export const CandidRegTwoSchema = z.object({
  fullNameOfKin: z.string().min(3, { message: "First name is required." }),
  relationToYou: z.string().min(3, { message: "Last name is required." }),
  kinMobileNo: z.string().regex(/^\d{10,15}$/, {
    message: "Mobile number must be 10–15 digits.",
  }),
  kinLandlineNo: z.string().regex(/^\d{10,15}$/, {
    message: "Mobile number must be 10–15 digits.",
  }),
  kinEmail: z.email({
    message: "Please enter a valid email address.",
  }),
});

export const CandidRegThreeSchema = z.object({
  criminalCautionAct1974: z.enum(["true", "false"], {
    message: "Criminal caution is required.",
  }),
  reasonForAct1974: z.string(),
});

export const CandidRegFourSchema = z.object({
  nameAsOnAccount: z.string().min(1, "Name is required"),
  bankSocietyName: z.string().min(1, "Bank name is required"),
  accountNo: z
    .string()
    .min(8, "Account number must be 8 digits")
    .max(8, "Account number must be 12 digits")
    .regex(/^\d+$/, "Account number must contain only numbers"),
  sortCode: z
    .string()
    .min(6, "Sort code must be 6 digits")
    .max(6, "Sort code must be 6 digits")
    .regex(/^\d+$/, "Sort code must contain only numbers"),
  bankDetailConfirmation: z.boolean().refine((val) => val === true, {
    message: "You must confirm your bank details",
  }),
  holidayMode: z.enum(["hourlyPay", "accruedForMe"], {
    message: "Please select a holiday payment option",
  }),
});

export const CandidRegFiveSchema = z.object({
  drivingLicenceNo: z.string().min(5, "Driving licence number is required"),
  drivingLicenseShareCode: z.string().min(3, "Share code is required"),
  drivingLicense: z.object({
    frontPic: z.custom<File[]>(),
    backPic: z.custom<File[]>(),
  }),
  cpcCard: z.object({
    frontPic: z.custom<File[]>(),
    backPic: z.custom<File[]>(),
  }),
  digitalDrivingTachographCard: z.object({
    frontPic: z.custom<File[]>(),
    backPic: z.custom<File[]>(),
  }),
  allInOne: z.object({
    frontPic: z.custom<File[]>(),
    backPic: z.custom<File[]>(),
  }),
  motorIncidents: z.object({
    currentDrivingEndorsement: z.string({
      message: "Current driving endorsement is required.",
    }),
    isHgvPsvCollisionYears5: z.enum(["true", "false"]),
    isSubjectFromTrafficCommissioner: z.enum(["true", "false"]),
    isAppearedBeforeTrafficCommissioner: z.enum(["true", "false"]),
    isPrescribedMedication: z.enum(["true", "false"]),
    isSufferFromDrugs: z.enum(["true", "false"]),
    isIllegalSubstance: z.enum(["true", "false"]),
    reasonForIllegalSubstance: z.string(),
    isRandomDrugTest: z.enum(["true", "false"]),
    reasonForNoRandomDrugTest: z.string(),
    isNeedGlassToDrive: z.enum(["true", "false"]),
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
        employmentStartDate: z.date().nullable().optional(),
        employmentEndDate: z.date().nullable().optional(),
        approachability: z.boolean(),
      })
    )
    .max(2),
});

export const CandidRegSevenSchema = z.object({
  preferences: z
    .array(
      z
        .object({
          jobPrefs: z.object({
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
          }),
          preferredShiftPatterns: z.object({
            days: z.boolean(),
            nights: z.boolean(),
            nightsOut: z.boolean(),
            tramper: z.boolean(),
          }),
        })
        // ✅ At least one JOB preference
        .refine((data) => Object.values(data.jobPrefs).some(Boolean), {
          message: "Select at least one preference",
          path: ["jobPrefs"],
        })
        // ✅ At least one SHIFT pattern
        .refine(
          (data) => Object.values(data.preferredShiftPatterns).some(Boolean),
          {
            message: "Select at least one shift pattern",
            path: ["preferredShiftPatterns"],
          }
        )
    )
    .max(1, "Only one preference object is allowed"),
  preferredStartedTimeWindow: z.string(),
});

export const CandidRegEightSchema = z.object({
  drivingLicenseInfo: z.boolean().refine(Boolean, {
    message: "Driving license info permission is required",
  }),
  payInfo: z.boolean().refine(Boolean, {
    message: "Pay info permission is required",
  }),
  contactInfo: z.boolean().refine(Boolean, {
    message: "Contact info permission is required",
  }),
  medicalInfo: z.boolean().refine(Boolean, {
    message: "Medical info permission is required",
  }),
  criminalConvictionsInfo: z.boolean().refine(Boolean, {
    message: "Criminal convictions info permission is required",
  }),
  rightToWorkInfo: z.boolean().refine(Boolean, {
    message: "Right to work info permission is required",
  }),
});

export const CandidRegNineSchema = z
  .object({
    nationalInsuranceNo: z.string().min(1, "NI number is required"),
    sex: z.enum(["male", "female"], {
      message: "Sex is required",
    }),
    p45File: z.custom<File[]>().optional(),
    employeeStatus: z.string().min(1, "Employee status is required"),
    studentLoans: z.object({
      dontHaveLoan: z.boolean(),
      haveLoan: z.boolean(),
      havePlanOneLoan: z.boolean(),
      havePlanTwoLoan: z.boolean(),
      havePlanFourLoan: z.boolean(),
      havePostgraduateLoan: z.boolean(),
    }),
    signature: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const loans = data.studentLoans;

    const { dontHaveLoan, ...loanPlans } = loans;

    const hasAnyLoanPlan = Object.values(loanPlans).some(Boolean);

    // ❌ nothing selected
    if (!dontHaveLoan && !hasAnyLoanPlan) {
      ctx.addIssue({
        path: ["studentLoans"],
        message: "Select at least one option",
        code: z.ZodIssueCode.custom,
      });
    }

    // ❌ conflicting selection
    if (dontHaveLoan && hasAnyLoanPlan) {
      ctx.addIssue({
        path: ["studentLoans"],
        message:
          "You cannot select 'Don't have a loan' together with loan plans",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export const GetCandidateRegInfoSchema = z.object({
  userId: z.string(),
});

// client multistep form schema

export const CliRegOneSchema = z.object({
  companyLegalName: z.string().min(1, { message: "Company name is required" }),
  tradingAs: z.string(),
  companyRegistrationNo: z.string().min(3, {
    message: "Company registration number is required",
  }),
  vatNo: z.string(),
  registeredBusinessAddress: z.object({
    street: z.string().min(1, { message: "Street is required" }),
    city: z.string().min(1, { message: "City is required" }),
    country: z.string().min(1, { message: "Country is required" }),
    postCode: z.string().min(1, { message: "Post code is required" }),
  }),
  companyWebsite: z.string().optional(),
  industry: z.string().min(1, { message: "Industry is required" }),
});

export const CliRegTwoSchema = z.object({
  primaryContact: z.object({
    fullName: z.string().min(1, "Primary contact full name is required"),
    jobTitle: z.string().min(1, "Primary contact job title is required"),
    address: z.string().min(1, "Primary contact address is required"),
    email: z
      .email("Primary contact email must be a valid email address")
      .min(1, "Primary contact email is required"),
    phoneNo: z
      .string()
      .min(1, "Primary contact phone number is required")
      .regex(/^\+?[0-9]{7,15}$/, "Primary contact phone number is invalid"),
  }),
  sameAsPrimary: z.boolean(),
  billingContact: z.object({
    fullName: z.string().min(1, "Billing contact full name is required"),
    address: z.string().min(1, "Billing contact address is required"),
    email: z
      .email("Billing contact email must be a valid email address")
      .min(1, "Billing contact email is required"),
    phoneNo: z
      .string()
      .min(1, "Billing contact phone number is required")
      .regex(/^\+?[0-9]{7,15}$/, "Billing contact phone number is invalid"),
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
