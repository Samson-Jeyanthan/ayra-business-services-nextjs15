interface IParams {
  data: {
    companyLegalName: string;
    tradingAs: string;
    companyRegistrationNo: string;
    vatNo: string;
    registeredBusinessAddress: {
      street: string;
      city: string;
      country: string;
      postCode: string;
    };
    companyWebsite?: string;
    industry: string;
  };
}

const ClientOne = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">Company Information</h3>
      <div>
        <p>{data.companyLegalName}</p>
        <p>{data.tradingAs}</p>
        <p>{data.companyRegistrationNo}</p>
        <p>{data.vatNo}</p>
        <p>{data.registeredBusinessAddress.street}</p>
        <p>{data.registeredBusinessAddress.city}</p>
        <p>{data.registeredBusinessAddress.country}</p>
        <p>{data.registeredBusinessAddress.postCode}</p>
        <p>{data.companyWebsite}</p>
        <p>{data.industry}</p>
      </div>
    </section>
  );
};

export default ClientOne;
