import Image from "next/image";

interface IParams {
  data: {
    drivingLicenceNo: string;
    drivingLicenseShareCode: string;
    drivingLicense: {
      frontPic: string;
      backPic: string;
    };
    cpcCard: {
      frontPic: string;
      backPic: string;
    };
    digitalDrivingTachographCard: {
      frontPic: string;
      backPic: string;
    };
    allInOne: {
      frontPic: string;
      backPic: string;
    };
    motorIncidents: {
      currentDrivingEndorsement: string;
      isHgvPsvCollisionYears5: "true" | "false";
      isSubjectFromTrafficCommissioner: "true" | "false";
      isAppearedBeforeTrafficCommissioner: "true" | "false";
      isPrescribedMedication: "true" | "false";
      isSufferFromDrugs: "true" | "false";
      isIllegalSubstance: "true" | "false";
      reasonForIllegalSubstance: string;
      isRandomDrugTest: "true" | "false";
      reasonForNoRandomDrugTest: string;
      isNeedGlassToDrive: "true" | "false";
      lastEyeTestDate: string;
    };
  };
}

const CandidateFive = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-2">
      <h3 className="profile-heading">Your Driving Information</h3>
      <div className="flex-items-start">
        <p className="profile-detail-label">Driving Licence No:</p>
        <p className="profile-detail">{data.drivingLicenceNo}</p>
      </div>
      <div className="flex-items-start">
        <p className="profile-detail-label">Driving License Share Code:</p>
        <p className="profile-detail">{data.drivingLicenseShareCode}</p>
      </div>

      <p className="font-semibold my-4">Driving License Front & Back Images</p>
      <div className="flex gap-4">
        <Image
          src={data.drivingLicense.frontPic}
          alt="Candidate Picture"
          width={200}
          height={200}
          className="card-img"
        />
        <Image
          src={data.drivingLicense.backPic}
          alt="Candidate Picture"
          width={200}
          height={200}
          className="card-img"
        />
      </div>
      <p className="font-semibold my-4">CPC Card Front & Back Images</p>
      <div className="flex gap-4">
        <Image
          src={data.cpcCard.frontPic}
          alt="Candidate Picture"
          width={200}
          height={200}
          className="card-img"
        />
        <Image
          src={data.cpcCard.backPic}
          alt="Candidate Picture"
          width={200}
          height={200}
          className="card-img"
        />
      </div>
      <p className="font-semibold my-4">
        Digital Driving Tachograph Card Front & Back Images
      </p>
      <div className="flex gap-4">
        <Image
          src={data.digitalDrivingTachographCard.frontPic}
          alt="Candidate Picture"
          width={200}
          height={200}
          className="card-img"
        />
        <Image
          src={data.digitalDrivingTachographCard.backPic}
          alt="Candidate Picture"
          width={200}
          height={200}
          className="card-img"
        />
      </div>
      <p className="font-semibold my-4">
        All In One include Front & Back Images
      </p>
      <div className="flex gap-4">
        <Image
          src={data.allInOne.frontPic}
          alt="Candidate Picture"
          width={200}
          height={200}
          className="card-img"
        />
        <Image
          src={data.allInOne.backPic}
          alt="Candidate Picture"
          width={200}
          height={200}
          className="card-img"
        />
      </div>
    </section>
  );
};

export default CandidateFive;
