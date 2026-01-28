import mongoose from "mongoose";
import { dbConnect, dbDisconnect } from "./mongoose.js";

const { model, models, Schema } = mongoose;

export const candStepOneSchema = new Schema(
  {
    data: {
      title: { type: String },
      firstName: { type: String },
      lastName: { type: String },
      dob: { type: String },
      homeAddress: { type: String },
      town: { type: String },
      postCode: { type: String },
      mobileNo: { type: String },
      landlineNo: { type: String },
      email: { type: String },
      pictureOfYourself: { type: String },
    },
    isCompleted: {
      type: Boolean,
      default: false,
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

export const candStepTwoSchema = new Schema(
  {
    data: {
      fullNameOfKin: { type: String },
      relationToYou: { type: String },
      kinMobileNo: { type: String },
      kinLandlineNo: { type: String },
      kinEmail: { type: String },
    },
    isCompleted: {
      type: Boolean,
      default: false,
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

export const candStepThreeSchema = new Schema(
  {
    data: {
      criminalCautionAct1974: { type: Boolean },
      reasonForAct1974: { type: String },
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

export const candStepFourSchema = new Schema(
  {
    data: {
      nameAsOnAccount: {
        type: String,
        required: true,
        trim: true,
      },
      bankSocietyName: {
        type: String,
        required: true,
        trim: true,
      },
      accountNo: {
        type: String,
        required: true,
        // match: [/^\d{8}$/, "Account number must be 8 digits"],
      },
      sortCode: {
        type: String,
        required: true,
        // match: [/^\d{6}$/, "Sort code must be 6 digits"],
      },
      bankDetailConfirmation: {
        type: Boolean,
        required: true,
      },
      holidayMode: {
        type: String,
        enum: ["hourlyPay", "accruedForMe"],
        required: true,
      },
    },
    isCompleted: {
      type: Boolean,
      default: false,
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

const refereeTemplate = {
  companyName: { type: String },
  position: { type: String },
  contactName: { type: String },
  address: { type: String },
  postCode: { type: String },
  phoneNo: { type: String },
  email: { type: String },
  employmentStartDate: { type: String },
  employmentEndDate: { type: String },
  approachability: { type: Boolean },
};

export const candStepSixSchema = new Schema(
  {
    data: { references: [refereeTemplate, refereeTemplate] },
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

// ------------------------ candidate model ------------------------------

const CandidateSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    stepOne: candStepOneSchema,
    stepTwo: candStepTwoSchema,
    stepThree: candStepThreeSchema,
    stepFour: candStepFourSchema,
    overallStatus: {
      type: String,
      enum: ["draft", "in_review", "approved", "rejected"],
      default: "draft",
    },
    overallCompleted: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Candidate = models.Candidate || model("Candidate", CandidateSchema);

export default Candidate;

// ------------------------ migration function ----------------------------

const migrateCandidates = async () => {
  try {
    await dbConnect();

    // Fetch all candidates with stepFour
    const candidates = await Candidate.find(
      {},
      { "stepFour.data.holidayMode": 1, _id: 1 }
    );

    console.log("Starting holidayMode migration...");

    for (const candidate of candidates) {
      const val = candidate.stepFour?.data?.holidayMode;

      let newVal;

      // Map boolean or other values to one of the two allowed strings
      if (val === true || val === "true") {
        newVal = "hourlyPay";
      } else if (val === false || val === "false") {
        newVal = "accruedForMe";
      } else if (val === "hourlyPay" || val === "accruedForMe") {
        newVal = val; // already correct
      } else {
        // default value if invalid / null / undefined
        newVal = "hourlyPay";
      }

      // Update the document
      await Candidate.updateOne(
        { _id: candidate._id },
        { $set: { "stepFour.data.holidayMode": newVal } }
      );

      console.log(
        `Candidate ${candidate._id} → holidayMode set to "${newVal}"`
      );
    }

    console.log("Migration completed successfully!");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await dbDisconnect();
  }
};

migrateCandidates();
