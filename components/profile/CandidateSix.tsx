interface IParams {
  data: {
    references: IRefereeTemplate[];
  };
}

const CandidateSix = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">Referee Information</h3>
      {data.references.map((referee, index) => (
        <div key={index}>
          <p>{referee.companyName}</p>
          <p>{referee.position}</p>
          <p>{referee.contactName}</p>
          <p>{referee.address}</p>
          <p>{referee.postCode}</p>
          <p>{referee.phoneNo}</p>
          <p>{referee.email}</p>
          <p>{referee.employmentStartDate}</p>
          <p>{referee.employmentEndDate}</p>
          <p>{referee.approachability}</p>
        </div>
      ))}
    </section>
  );
};

export default CandidateSix;
