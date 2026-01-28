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
      <p>
        <span className="font-semibold">Full Name:</span> {data.fullNameOfKin}
      </p>
      <p>
        <span className="font-semibold">Relationship:</span>{" "}
        {data.relationToYou}
      </p>
      <p>
        <span className="font-semibold">Mobile:</span> {data.kinMobileNo}
      </p>
      <p>
        <span className="font-semibold">Landline:</span> {data.kinLandlineNo}
      </p>
      <p>
        <span className="font-semibold">Email:</span> {data.kinEmail}
      </p>
    </section>
  );
};

export default CandidateTwo;
