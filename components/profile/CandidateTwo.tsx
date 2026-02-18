interface IParams {
  data: {
    fullNameOfKin: string;
    relationToYou: string;
    kinMobileNo: string;
    kinLandlineNo: string;
    kinEmail: string;
  };
}

const CandidateTwo = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-2">
      <h3 className="profile-heading">Next of Kin Information</h3>

      <div className="p-4 md:p-0 flex flex-col gap-2">
        <div className="flex-items-start">
          <p className="profile-detail-label">Full Name:</p>
          <p className="profile-detail">{data.fullNameOfKin}</p>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label">Relationship:</p>
          <p className="profile-detail">{data.relationToYou}</p>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label">Contact:</p>
          <div className="profile-detail">
            <p>{data.kinMobileNo}</p>
            <p>{data.kinLandlineNo}</p>
          </div>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label">Email:</p>
          <p className="profile-detail">{data.kinEmail}</p>
        </div>
      </div>
    </section>
  );
};

export default CandidateTwo;
