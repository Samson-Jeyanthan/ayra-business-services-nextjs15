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

      <div className="flex-items-start">
        <p className="profile-detail-label">Criminal Caution Act 1974:</p>
        <p className="profile-detail">
          {data.criminalCautionAct1974 ? "Yes" : "No"}
        </p>
      </div>
      {data.criminalCautionAct1974 && (
        <div className="flex-items-start">
          <p className="profile-detail-label">Reason For Act 1974:</p>
          <p className="profile-detail">{data.reasonForAct1974}</p>
        </div>
      )}
    </section>
  );
};

export default CandidateThree;
