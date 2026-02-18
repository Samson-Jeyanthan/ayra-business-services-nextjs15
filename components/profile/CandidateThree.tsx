interface IParams {
  data: {
    criminalCautionAct1974: string;
    reasonForAct1974: string;
  };
}

const CandidateThree = ({ data }: IParams) => {
  return (
    <section className="profile-detail-section-wrapper">
      <h3 className="profile-heading">Criminal Convictions Information</h3>

      <div className="profile-detail-section-wrapper p-4 md:p-0">
        <div className="flex-items-start">
          <p className="profile-detail-label-2">Criminal Caution Act 1974:</p>
          <p className="profile-detail">
            {data.criminalCautionAct1974 ? "Yes" : "No"}
          </p>
        </div>
        {data.criminalCautionAct1974 && (
          <div className="flex-items-start flex flex-col md:flex-row gap-2 md:gap-0">
            <p className="font-medium pr-2 md:pr-0 text-sm md:text-base text-light-200 min-w-28 max-w-full md:min-w-52 md:max-w-52">
              Reason For Act 1974:
            </p>
            <p className="profile-detail text-sm md:text-base text-justify md:text-left">
              {data.reasonForAct1974}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CandidateThree;
