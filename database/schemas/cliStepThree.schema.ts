import { Schema } from "mongoose";

// step 03 - staffing request details

export const cliStepThreeSchema = new Schema(
  {
    jobInformation: {
      jobTitle: String,
      department: String,
      reportingTo: String,
      locationOfWork: String,
      ifYesHybrid: String,
    },
    employmentTerms: {
      typeOfPosition: String,
      startDate: String,
      endDate: String,
      workingTimeType: String,
      workingHours: String,
      workSchedule: String,
    },
    compensations: {
      salaryRangeFrom: Number,
      salaryRangeTo: Number,
      hourlyRate: Number,
      isBonusCommission: Boolean,
      ifYesBonusCommission: String,
      keyBenefitsOffered: String,
    },
    roleAndCandidateProfile: {
      mainResponsibilities: String,
      essentialSkills: String,
      desirableSkills: String,
      requiredQualifications: String,
      keySoftSkills: String,
    },
  },
  { _id: false }
);
