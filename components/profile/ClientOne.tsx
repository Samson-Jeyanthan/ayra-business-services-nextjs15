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
      <div className="flex flex-col gap-1">
        <div className="flex-items-start">
          <p className="profile-detail-label">Company Legal Name:</p>
          <p className="profile-detail">{data.companyLegalName}</p>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label">Trading as (if Different):</p>
          <p className="profile-detail">{data.tradingAs}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Company Registration No:</p>
          <p className="profile-detail">{data.companyRegistrationNo}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">VAT No:</p>
          <p className="profile-detail">{data.vatNo}</p>
        </div>

        <p className="profile-detail-subheading">
          Registered Business Address:
        </p>
        <div className="flex-items-start">
          <p className="profile-detail-label">Street:</p>
          <p className="profile-detail">
            {data.registeredBusinessAddress.street}
          </p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">City:</p>
          <p className="profile-detail">
            {data.registeredBusinessAddress.city}
          </p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Country:</p>
          <p className="profile-detail">
            {data.registeredBusinessAddress.country}
          </p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Post Code:</p>
          <p className="profile-detail">
            {data.registeredBusinessAddress.postCode}
          </p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Company Website:</p>
          <p className="profile-detail">
            {data.companyWebsite ? data.companyWebsite : "N/A"}
          </p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Industry / Sector:</p>
          <p className="profile-detail">{data.industry}</p>
        </div>
      </div>
    </section>
  );
};

export default ClientOne;
