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
      <div className="flex gap-4 p-4 md:p-0">
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

        <div className="flex flex-col gap-1">
          <div className="flex-items-start">
            <p className="profile-detail-label">First Name:</p>
            <p className="profile-detail">{data.firstName}</p>
          </div>
          <div>
            <p>{data.firstName}</p>
            <p>{data.lastName}</p>
          </div>
          <p>{data.dob}</p>
          <div>
            <p>{data.homeAddress}</p>
            <p>{data.town}</p>
            <p>{data.postCode}</p>
          </div>
          <div>
            <p>{data.mobileNo}</p>
            <p>{data.landlineNo}</p>
            <p>{data.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateOne;
