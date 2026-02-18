interface IParams {
  data: {
    primaryContact: {
      fullName: string;
      jobTitle: string;
      address: string;
      email: string;
      phoneNo: string;
    };
    sameAsPrimary: boolean;
    billingContact: {
      fullName: string;
      address: string;
      email: string;
      phoneNo: string;
    };
  };
}

const ClientTwo = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">Contact Information</h3>
      <div className="flex flex-col gap-2 p-4 md:p-0">
        <p className="profile-detail-subheading">Primary Contact:</p>
        <div className="flex-items-start">
          <p className="profile-detail-label-2">Full Name:</p>
          <p className="profile-detail">{data.primaryContact.fullName}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label-2">Job Titile:</p>
          <p className="profile-detail">{data.primaryContact.jobTitle}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label-2">Address:</p>
          <p className="profile-detail">{data.primaryContact.address}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label-2">Email:</p>
          <p className="profile-detail">{data.primaryContact.email}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label-2">Phone No:</p>
          <p className="profile-detail">{data.primaryContact.phoneNo}</p>
        </div>
        <p className="profile-detail-subheading">Billing Contact:</p>
        <div className="flex-items-start">
          <p className="profile-detail-label-2">Full Name:</p>
          <p className="profile-detail">{data.billingContact.fullName}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label-2">Address:</p>
          <p className="profile-detail">{data.billingContact.address}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label-2">Email:</p>
          <p className="profile-detail">{data.billingContact.email}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label-2">Phone No:</p>
          <p className="profile-detail">{data.billingContact.phoneNo}</p>
        </div>
      </div>
    </section>
  );
};

export default ClientTwo;
