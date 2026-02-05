interface IParams {
  data: {
    authorizedPersonName: string;
    jobTitle: string;
    signature: string;
    date: string;
  };
}

const ClientFive = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">Agreement & Authourization</h3>
      <div>
        <p>{data.authorizedPersonName}</p>
        <p>{data.jobTitle}</p>
        <p>{data.signature}</p>
        <p>{data.date}</p>
      </div>
    </section>
  );
};

export default ClientFive;
