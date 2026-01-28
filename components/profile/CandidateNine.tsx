interface IParams {
  data: ICandidateRegStepNineParams;
}

const CandidateNine = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">New Starter Declaration Information</h3>
      <div>
        <p>
          <span className="font-semibold">National Insurance Number : </span>
          {data.nationalInsuranceNo}
        </p>
        <p>
          <span>
            <span className="font-semibold">Gender : </span>
          </span>
          {data.sex}
        </p>
        <p>{data.employeeStatus}</p>
        <p>
          <span className="font-semibold">Student Loans : </span>
          {data.studentLoans.dontHaveLoan ? "You don't have a loan" : ""}
        </p>
      </div>
    </section>
  );
};

export default CandidateNine;
