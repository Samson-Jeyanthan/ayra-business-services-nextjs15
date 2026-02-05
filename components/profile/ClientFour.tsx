interface IParams {
  data: {
    intendedInterviewProcess: string;
    deadlineForCandidate: string;
  };
}

const ClientFour = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">Pay Information</h3>
      <div>
        <p>{data?.intendedInterviewProcess}</p>
        <p>{data?.deadlineForCandidate}</p>
      </div>
    </section>
  );
};

export default ClientFour;
