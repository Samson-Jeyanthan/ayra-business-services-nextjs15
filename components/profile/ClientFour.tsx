import { formatDateToReadable } from "@/lib/functions/client.functions";

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
      <div className="flex flex-col gap-4 p-4 md:p-0">
        <div className="flex flex-col gap-2 md:flex-items-start">
          <p className="profile-detail-label-2 max-w-full">
            Intended Interview Process:
          </p>
          <p className="profile-detail">{data?.intendedInterviewProcess}</p>
        </div>
        <div className="flex-items-start">
          <p className="profile-detail-label-2">Deadline for Candidate:</p>
          <p className="profile-detail">
            {formatDateToReadable(data?.deadlineForCandidate)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientFour;
