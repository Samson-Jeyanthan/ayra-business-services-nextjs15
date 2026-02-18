import { formatDateToReadable } from "@/lib/functions/client.functions";

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
      <div className="flex flex-col gap-2 p-4 md:p-0">
        <div className="flex-items-start">
          <p className="profile-detail-label-2">Authorized Person Name:</p>
          <p className="profile-detail">{data.authorizedPersonName}</p>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label-2">Job Title:</p>
          <p className="profile-detail">{data.jobTitle}</p>
        </div>

        {/* <div>
          <p className="profile-detail-label-2">Signature:</p>
          <p className="profile-detail">{data.signature}</p>
        </div> */}

        <div className="flex-items-start">
          <p className="profile-detail-label-2">Date:</p>
          <p className="profile-detail">{formatDateToReadable(data.date)}</p>
        </div>
      </div>
    </section>
  );
};

export default ClientFive;
