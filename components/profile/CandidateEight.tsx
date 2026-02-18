interface IParams {
  data: {
    drivingLicenseInfo: boolean;
    payInfo: boolean;
    contactInfo: boolean;
    medicalInfo: boolean;
    criminalConvictionsInfo: boolean;
    rightToWorkInfo: boolean;
  };
}

const CandidateEight = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">Data Protect & Privacy Information</h3>
      <div className="flex flex-col gap-2 p-4 md:p-0">
        <p className="text-sm md:text-base text-justify md:text-left">
          You have gave permission to use these information and when we process
          your personal data, we must do so in accordance with data protection
          laws. Those laws require us to give you a Privacy Statement to explain
          how we manage your personal data. Permission for Resolute Logistics
          Recruitment to state my information with Clients and other relavant
          parties (including, but not limited to: Insurers, Police and Local
          Authorities) I will be working with:
        </p>

        <div className="flex-items-start mt-2">
          <p className="profile-detail-label-2">
            {" "}
            Driving license information:
          </p>
          <p className="profile-detail">
            {data.drivingLicenseInfo
              ? "Permission Granted"
              : "Permission Denied"}
          </p>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label-2"> Pay information:</p>
          <p className="profile-detail">
            {data.payInfo ? "Permission Granted" : "Permission Denied"}
          </p>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label-2"> Contact information:</p>
          <p className="profile-detail">
            {data.contactInfo ? "Permission Granted" : "Permission Denied"}
          </p>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label-2"> Medical information:</p>
          <p className="profile-detail">
            {data.medicalInfo ? "Permission Granted" : "Permission Denied"}
          </p>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label-2">
            {" "}
            Criminal convictions information:
          </p>
          <p className="profile-detail">
            {data.criminalConvictionsInfo
              ? "Permission Granted"
              : "Permission Denied"}
          </p>
        </div>

        <div className="flex-items-start">
          <p className="profile-detail-label-2"> Right to work information:</p>
          <p className="profile-detail">
            {data.rightToWorkInfo ? "Permission Granted" : "Permission Denied"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CandidateEight;
