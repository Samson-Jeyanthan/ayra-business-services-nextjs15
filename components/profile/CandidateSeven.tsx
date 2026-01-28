interface IParams {
  data: {
    preferences: IPreferenceTemplate[];
    preferredStartedTimeWindow: string;
  };
}

const CandidateSeven = ({ data }: IParams) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="profile-heading">Preference Information</h3>
      <div>
        {data.preferences.map((pref, index) => (
          <div key={index}>
            <p>{pref.jobPrefs.adrTanks}</p>
            <p>{pref.jobPrefs.adrPackages}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CandidateSeven;
