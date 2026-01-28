interface IParams {
  data: {
    criminalCautionAct1974: string;
    reasonForAct1974: string;
  };
}

const CandidateThree = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">Criminal Convictions Information</h3>
      <p>
        <span className="font-semibold">Criminal Caution Act 1974:</span>{" "}
        {data.criminalCautionAct1974 ? "Yes" : "No"}
      </p>
      <p>
        <span className="font-semibold">Reason For Act 1974:</span>{" "}
        {data.reasonForAct1974}
      </p>
    </section>
  );
};

export default CandidateThree;
