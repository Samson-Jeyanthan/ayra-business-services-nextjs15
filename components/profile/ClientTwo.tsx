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
      <div>
        <p>{data.primaryContact.fullName}</p>
        <p>{data.primaryContact.jobTitle}</p>
        <p>{data.primaryContact.address}</p>
        <p>{data.primaryContact.email}</p>
        <p>{data.primaryContact.phoneNo}</p>
        <p>{data.billingContact.fullName}</p>
        <p>{data.billingContact.address}</p>
        <p>{data.billingContact.email}</p>
        <p>{data.billingContact.phoneNo}</p>
      </div>
    </section>
  );
};

export default ClientTwo;
