interface IParams {
  data: {
    references: IRefereeTemplate[];
  };
}

const CandidateSix = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">Referee Information</h3>

      <div className="flex w-full gap-24">
        {data.references.map((referee, index) => (
          <div key={index}>
            <p className="font-semibold text-xl">Referee {index + 1}</p>

            <div className="flex-items-start">
              <p className="profile-detail-label">Company Name:</p>
              <p className="profile-detail">{referee.companyName}</p>
            </div>

            <div className="flex-items-start">
              <p className="profile-detail-label">Position:</p>
              <p className="profile-detail">{referee.position}</p>
            </div>

            <div className="flex-items-start">
              <p className="profile-detail-label">Contact Name:</p>
              <p className="profile-detail">{referee.contactName}</p>
            </div>

            <div className="flex-items-start">
              <p className="profile-detail-label">Address:</p>
              <div className="profile-detail">
                <p>{referee.address}</p>
                <p>{referee.postCode}</p>
              </div>
            </div>

            <div className="flex-items-start">
              <p className="profile-detail-label">Phone No:</p>
              <p className="profile-detail">{referee.phoneNo}</p>
            </div>

            <div className="flex-items-start">
              <p className="profile-detail-label">Email:</p>
              <p className="profile-detail">{referee.email}</p>
            </div>

            <div className="flex-items-start">
              <p className="profile-detail-label">Employment Start Date:</p>
              <p className="profile-detail">{referee.employmentStartDate}</p>
            </div>
            <div className="flex-items-start">
              <p className="profile-detail-label">Employment End Date:</p>
              <p className="profile-detail">{referee.employmentEndDate}</p>
            </div>
            <div className="flex-items-start">
              <p className="profile-detail-label">Approachability:</p>
              <p className="profile-detail">
                {referee.approachability ? "Yes" : "No"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CandidateSix;
