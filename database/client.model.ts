import { model, models, Schema } from "mongoose";

export interface ICandidate {
  userId: Schema.Types.ObjectId;
  clientReqId: Schema.Types.ObjectId;
  // step 01 - client company information
  stepOne: {
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
    companyWebsite: string;
    industry: string;
  };
  // step 02 - contact information
  stepTwo: {
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
  };
  // step 03 - staffing request details
  stepThree: {
    jobInformation: {
      jobTitle: string;
      department: string;
      reportingTo: string;
      locationOfWork: string;
      ifYesHybrid: string;
    };
    employmentTerms: {
      typeOfPosition: string;
      startDate: string;
      endDate: string;
      workingTimeType: string;
      workingHours: string;
      workSchedule: string;
    };
    compensations: {
      salaryRangeFrom: number;
      salaryRangeTo: number;
      hourlyRate: number;
      isBonusCommission: boolean;
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
  };
  // step 04 - recruitment process
  stepFour: {
    intendedInterviewProcess: string;
    deadlineForCandidate: string;
  };
  // step - 05 - agreement & Authourization
  stepFive: {
    authorizedPersonName: string;
    jobTitle: string;
    signature: string;
    date: string;
  };
}
