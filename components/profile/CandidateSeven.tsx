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

      {data.preferences.map((pref, index) => {
        const trueJobPrefs = Object.entries(pref.jobPrefs)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, value]) => value === true)
          .map(([key]) => key);

        const trueShiftPrefs = Object.entries(pref.preferredShiftPatterns)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, value]) => value === true)
          .map(([key]) => key);

        return (
          <div key={index} className="space-y-2">
            {/* Job Preferences */}
            {trueJobPrefs.length > 0 && (
              <div>
                <h4 className="font-semibold">Job Preferences</h4>
                <ul className="list-disc list-inside">
                  {trueJobPrefs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Shift Preferences */}
            {trueShiftPrefs.length > 0 && (
              <div>
                <h4 className="font-semibold">Preferred Shift Patterns</h4>
                <ul className="list-disc list-inside">
                  {trueShiftPrefs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default CandidateSeven;
