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
  email: z.email(),
  password: z.string(),
  userType: z.enum(["client", "canditate", "admin", "superadmin"]),
  status: z.enum(["pending", "rejected", "registered", "removed"]),
});

export const ClientReqSchema = z.object({
  fullName: z.string().min(3),
  companyName: z.string().min(3),
  email: z.email(),
  phoneNo: z.string().min(3),
  message: z.string().min(3),
});

export const CandidateReqSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.email(),
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
  firstName: z.string().min(3, { message: "First name is required." }),
  lastName: z.string().min(3, { message: "Last name is required." }),
  dob: z
    .date({
      message: "Date of birth is required.",
    })
    .nullable()
    .refine((val) => val !== null, { message: "Date of birth is required." }),
  homeAddress: z.string().min(10, { message: "Home address is required." }),
  town: z.string().min(3),
  postCode: z.string().min(3),
  mobileNo: z.string().min(10),
  landlineNo: z.string().min(10),
  email: z.email().min(3),
  pictureOfYourself: z.string().min(3),
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
    hgvPsvCollisionYears5: z.boolean(),
    subjectFromTrafficCommissioner: z.boolean(),
    appearedBeforeTrafficCommissioner: z.boolean(),
    prescribedMedication: z.boolean(),
    sufferFromDrugs: z.boolean(),
    illegalSubstance: z.boolean(),
    reasonForIllegalSubstance: z.string(),
    needGlassToDrive: z.string(),
    lastEyeTestDate: z.string(),
  }),
});
