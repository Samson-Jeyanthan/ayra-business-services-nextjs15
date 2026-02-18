interface IParams {
  data: {
    references: IRefereeTemplate[];
  };
}

const CandidateSix = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">Referee Information</h3>

      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-24 p-4 md:p-0">
        {data.references.map((referee, index) => (
          <div key={index} className="flex flex-col gap-1.5">
            <p className="font-semibold text-xl mb-2 md:mb-0">
              Referee {index + 1}
            </p>

            <div className="flex-items-start">
              <p className="profile-detail-label-2">Company Name:</p>
              <p className="profile-detail">{referee.companyName}</p>
            </div>

            <div className="flex-items-start">
              <p className="profile-detail-label-2">Position:</p>
              <p className="profile-detail">{referee.position}</p>
            </div>

            <div className="flex-items-start">
              <p className="profile-detail-label-2">Contact Name:</p>
              <p className="profile-detail">{referee.contactName}</p>
            </div>

            <div className="flex-items-start">
              <p className="profile-detail-label-2">Address:</p>
              <div className="profile-detail">
                <p>{referee.address}</p>
                <p>{referee.postCode}</p>
              </div>
            </div>

            <div className="flex-items-start">
              <p className="profile-detail-label-2">Phone No:</p>
              <p className="profile-detail">{referee.phoneNo}</p>
            </div>

            <div className="flex-items-start">
              <p className="profile-detail-label-2">Email:</p>
              <p className="profile-detail">{referee.email}</p>
            </div>

            <div className="flex-items-start">
              <p className="profile-detail-label-2">Employment Start Date:</p>
              <p className="profile-detail">{referee.employmentStartDate}</p>
            </div>
            <div className="flex-items-start">
              <p className="profile-detail-label-2">Employment End Date:</p>
              <p className="profile-detail">{referee.employmentEndDate}</p>
            </div>
            <div className="flex-items-start">
              <p className="profile-detail-label-2">Approachability:</p>
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
