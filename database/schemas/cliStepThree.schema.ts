import { Schema } from "mongoose";

// step 03 - staffing request details

export const cliStepThreeSchema = new Schema(
  {
    data: {
      jobInformation: {
        jobTitle: { type: String },
        department: { type: String },
        reportingTo: { type: String },
        locationOfWork: { type: String },
        ifHybridDays: { type: String, required: false },
      },
      employmentTerms: {
        typeOfPosition: { type: String },
        startDate: { type: String },
        endDate: { type: String, required: false },
        workingTimeType: { type: String },
        workingHours: { type: String },
        workSchedule: { type: String },
      },
      compensations: {
        salaryRangeFrom: { type: String },
        salaryRangeTo: { type: String },
        hourlyRate: { type: String, required: false },
        isBonusCommission: {
          type: { type: Boolean },
          enum: ["true", "false"],
        },
        ifYesBonusCommission: { type: String, required: false },
        keyBenefitsOffered: { type: String, required: false },
      },
      roleAndCandidateProfile: {
        mainResponsibilities: { type: String },
        essentialSkills: { type: String },
        desirableSkills: { type: String },
        requiredQualifications: { type: String },
        keySoftSkills: { type: String },
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
