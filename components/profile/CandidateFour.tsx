interface IParams {
  data: {
    nameAsOnAccount: string;
    bankSocietyName: string;
    accountNo: string;
    sortCode: string;
    bankDetailConfirmation: boolean;
    holidayMode: "hourlyPay" | "accruedForMe";
  };
}

const CandidateFour = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-2">
      <h3 className="profile-heading">Pay Information</h3>
      <div className="flex flex-col gap-2 p-4 md:p-0">
        <div className="flex-items-start">
          <p className="profile-detail-label">Name As On Account:</p>
          <p className="profile-detail">{data.nameAsOnAccount}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Bank Society Name:</p>
          <p className="profile-detail">{data.bankSocietyName}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Account No:</p>
          <p className="profile-detail">{data.accountNo}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Sort Code:</p>
          <p className="profile-detail">{data.sortCode}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Bank Detail Confirmation:</p>
          <p className="profile-detail">
            {data.bankDetailConfirmation ? "Yes" : "No"}
          </p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label">Holiday Mode:</p>
          <p className="profile-detail">{data.holidayMode}</p>
        </div>
      </div>
    </section>
  );
};

export default CandidateFour;
