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
      <p>
        <span className="font-semibold">Name As On Account:</span>{" "}
        {data.nameAsOnAccount}
      </p>
      <p>
        <span className="font-semibold">Bank Society Name:</span>{" "}
        {data.bankSocietyName}
      </p>
      <p>
        <span className="font-semibold">Account No:</span> {data.accountNo}
      </p>
      <p>
        <span className="font-semibold">Sort Code:</span> {data.sortCode}
      </p>
      <p>
        <span className="font-semibold">Bank Detail Confirmation:</span>{" "}
        {data.bankDetailConfirmation ? "Yes" : "No"}
      </p>
      <p>
        <span className="font-semibold">Holiday Mode:</span> {data.holidayMode}
      </p>
    </section>
  );
};

export default CandidateFour;
