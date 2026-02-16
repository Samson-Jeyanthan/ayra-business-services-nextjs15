import { formatDateToReadable } from "@/lib/functions/client.functions";
import Image from "next/image";

interface IParams {
  data: {
    title: string;
    firstName: string;
    lastName: string;
    dob: string;
    homeAddress: string;
    town: string;
    postCode: string;
    mobileNo: string;
    landlineNo?: string;
    email: string;
    pictureOfYourself: string;
  };
}

const CandidateOne = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">Personal Information</h3>
      <div className="flex flex-col md:flex-row gap-12 p-4 md:p-0">
        <div className="flex-center md:!items-start">
          {data.pictureOfYourself ? (
            <Image
              src={data.pictureOfYourself}
              alt="Candidate Picture"
              width={200}
              height={200}
              className="bg-light-600 rounded-full border border-solid border-light-200 !size-28 md:!size-48 object-cover"
            />
          ) : (
            <p>No picture uploaded</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex-items-start">
            <p className="profile-detail-label">First Name:</p>
            <p className="profile-detail">{data.firstName}</p>
          </div>
          <div className="flex-items-start">
            <p className="profile-detail-label">Last Name:</p>
            <p className="profile-detail">{data.lastName}</p>
          </div>
          <div className="flex-items-start">
            <p className="profile-detail-label">Date of Birth:</p>
            <p className="profile-detail">{formatDateToReadable(data.dob)}</p>
          </div>
          <div className="flex-items-start">
            <p className="profile-detail-label">Address:</p>
            <div className="profile-detail">
              <p>{data.homeAddress}</p>
              <p>{data.town}</p>
              <p>{data.postCode}</p>
            </div>
          </div>
          <div className="flex-items-start">
            <p className="profile-detail-label">Contact:</p>
            <div className="profile-detail">
              <p>{data.mobileNo}</p>
              <p>{data.landlineNo}</p>
            </div>
          </div>
          <div className="flex-items-start">
            <p className="profile-detail-label">Email:</p>
            <p className="profile-detail">{data.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateOne;
