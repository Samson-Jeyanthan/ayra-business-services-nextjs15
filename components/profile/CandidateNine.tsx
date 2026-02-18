interface IParams {
  data: ICandidateRegStepNineParams;
}

const CandidateNine = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-2">
      <h3 className="profile-heading">New Starter Declaration Information</h3>

      <div className="flex flex-col gap-2 p-4 md:p-0">
        <div className="flex-items-start">
          <p className="profile-detail-label-2">National Insurance Number:</p>
          <p className="profile-detail">{data.nationalInsuranceNo}</p>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label-2">Gender:</p>
          <p className="profile-detail">{data.sex}</p>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label-2">Employee Status:</p>
          <p className="profile-detail">{data.employeeStatus}</p>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label-2">Student Loans:</p>
          <p className="profile-detail">
            {data.studentLoans.dontHaveLoan ? "You don't have a loan" : ""}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CandidateNine;
