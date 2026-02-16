interface IParams {
  data: ICandidateRegStepNineParams;
}

const CandidateNine = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-2">
      <h3 className="profile-heading">New Starter Declaration Information</h3>

      <div className="flex-items-start">
        <p className="profile-detail-label">National Insurance Number:</p>
        <p className="profile-detail">{data.nationalInsuranceNo}</p>
      </div>

      <div className="flex-items-start">
        <p className="profile-detail-label">Gender:</p>
        <p className="profile-detail">{data.sex}</p>
      </div>

      <div className="flex-items-start">
        <p className="profile-detail-label">Employee Status:</p>
        <p className="profile-detail">{data.employeeStatus}</p>
      </div>

      <div className="flex-items-start">
        <p className="profile-detail-label">Student Loans:</p>
        <p className="profile-detail">
          {data.studentLoans.dontHaveLoan ? "You don't have a loan" : ""}
        </p>
      </div>
    </section>
  );
};

export default CandidateNine;
