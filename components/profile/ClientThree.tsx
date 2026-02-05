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
      <div>
        <p>{data?.jobInformation.jobTitle}</p>
        <p>{data?.jobInformation.department}</p>
        <p>{data?.jobInformation.reportingTo}</p>
        <p>{data?.jobInformation.locationOfWork}</p>
        <p>{data?.jobInformation.ifHybridDays}</p>
      </div>
      <div>
        <p>{data?.employmentTerms.typeOfPosition}</p>
        <p>{data?.employmentTerms.startDate}</p>
        <p>{data?.employmentTerms.endDate}</p>
        <p>{data?.employmentTerms.workingTimeType}</p>
        <p>{data?.employmentTerms.workingHours}</p>
        <p>{data?.employmentTerms.workSchedule}</p>
      </div>
      <div>
        <p>{data?.compensations.salaryRangeFrom}</p>
        <p>{data?.compensations.salaryRangeTo}</p>
        <p>{data?.compensations.hourlyRate}</p>
        <p>{data?.compensations.isBonusCommission}</p>
        <p>{data?.compensations.ifYesBonusCommission}</p>
        <p>{data?.compensations.keyBenefitsOffered}</p>
      </div>
      <div>
        <p>{data?.roleAndCandidateProfile.mainResponsibilities}</p>
        <p>{data?.roleAndCandidateProfile.essentialSkills}</p>
        <p>{data?.roleAndCandidateProfile.desirableSkills}</p>
        <p>{data?.roleAndCandidateProfile.requiredQualifications}</p>
      </div>
    </section>
  );
};

export default ClientThree;
