import { formatDateToReadable } from "@/lib/functions/client.functions";

interface IParams {
  data: {
    jobInformation: {
      jobTitle: string;
      department: string;
      reportingTo: string;
      locationOfWork: string;
      ifHybridDays: string;
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
      salaryRangeFrom: string;
      salaryRangeTo: string;
      hourlyRate: string;
      isBonusCommission: boolean;
      ifYesBonusCommission: string;
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
}

const ClientThree = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">Staffing Request Details</h3>
      <div className="flex flex-col gap-1">
        <p className="profile-detail-subheading">Job Information:</p>
        <div className="flex-items-start">
          <p className="profile-detail-label">Job Title:</p>
          <p className="profile-detail">{data.jobInformation.jobTitle}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Department:</p>
          <p className="profile-detail">{data.jobInformation.department}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Reporting To (Job Title):</p>
          <p className="profile-detail">{data.jobInformation.reportingTo}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Location of Work:</p>
          <p className="profile-detail">{data.jobInformation.locationOfWork}</p>
        </div>
        {data.jobInformation.locationOfWork === "hybrid" && (
          <div className="flex-items-start">
            <p className="profile-detail-label">Days in Office:</p>
            <p className="profile-detail">{data.jobInformation.ifHybridDays}</p>
          </div>
        )}

        <p className="profile-detail-subheading">Employment Terms:</p>
        <div className="flex-items-start">
          <p className="profile-detail-label">Type of Position:</p>
          <p className="profile-detail">
            {data.employmentTerms.typeOfPosition}
          </p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Desired Start Date:</p>
          <p className="profile-detail">
            {formatDateToReadable(data.employmentTerms.startDate)}
          </p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">
            Desired End Date for Temporary / Contract Roles:
          </p>
          <p className="profile-detail">
            {formatDateToReadable(data.employmentTerms.endDate)}
          </p>
        </div>

        <p className="profile-detail-subheading">Working Hours:</p>
        <div className="flex-items-start">
          <p className="profile-detail-label">Work Time Type:</p>
          <p className="profile-detail">
            {data.employmentTerms.workingTimeType}
          </p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Hours per Days / Week:</p>
          <p className="profile-detail">{data.employmentTerms.workingHours}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Work Schedule:</p>
          <p className="profile-detail">{data.employmentTerms.workSchedule}</p>
        </div>

        <p className="profile-detail-subheading">Compensations:</p>
        <div className="flex-items-start">
          <p className="profile-detail-label">Salary Range From £:</p>
          <p className="profile-detail">
            {data?.compensations.salaryRangeFrom}
          </p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Salary Range To £:</p>
          <p className="profile-detail">{data?.compensations.salaryRangeTo}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Hourly / Daily Rate £:</p>
          <p className="profile-detail">{data?.compensations.hourlyRate}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Bonus / Commission:</p>
          <p className="profile-detail">
            {data?.compensations.isBonusCommission}
          </p>
        </div>

        {data?.compensations.ifYesBonusCommission === "true" && (
          <div className="flex-items-start">
            <p className="profile-detail-label">Bonus / Commission:</p>
            <p className="profile-detail">
              {data?.compensations.ifYesBonusCommission}
            </p>
          </div>
        )}

        <div className="flex-items-start">
          <p className="profile-detail-label">Work Time Type:</p>
          <p className="profile-detail">
            {data?.compensations.keyBenefitsOffered}
          </p>
        </div>

        <p className="profile-detail-subheading">Role & Candidate Profile:</p>
        <div className="flex flex-col gap-1">
          <p className="profile-detail-label w-full">
            Main Responsibilities & Duties of the Role:
          </p>
          <p className="profile-detail">
            {data?.roleAndCandidateProfile.mainResponsibilities}
          </p>
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <p className="profile-detail-label w-full">
            Esssential Skills & Experience (No Negotiable):
          </p>
          <p className="profile-detail">
            {data?.roleAndCandidateProfile.essentialSkills}
          </p>
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <p className="profile-detail-label w-full">
            Desirable Skills & Experience:
          </p>
          <p className="profile-detail">
            {data?.roleAndCandidateProfile.desirableSkills}
          </p>
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <p className="profile-detail-label w-full">
            Main Responsibilities & Duties of the Role:
          </p>
          <p className="profile-detail">
            {data?.roleAndCandidateProfile.requiredQualifications}
          </p>
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <p className="profile-detail-label w-full">Key Soft Skills:</p>
          <p className="profile-detail">
            {data?.roleAndCandidateProfile.keySoftSkills}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientThree;
