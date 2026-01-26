export function getStageNumber({
  stepNo,
  isCandidStep,
}: {
  stepNo: string;
  isCandidStep: boolean;
}) {
  if (isCandidStep) {
    if (stepNo === "step-one") {
      return { no: 0, label: "Personal Information" };
    } else if (stepNo === "step-two") {
      return { no: 1, label: "Next of Kin" };
    } else if (stepNo === "step-three") {
      return { no: 2, label: "Criminal Convictions" };
    } else if (stepNo === "step-four") {
      return { no: 3, label: "Pay" };
    } else if (stepNo === "step-five") {
      return { no: 4, label: "Your Driving" };
    } else if (stepNo === "step-six") {
      return { no: 5, label: "References" };
    } else if (stepNo === "step-seven") {
      return { no: 6, label: "Preferences" };
    } else if (stepNo === "step-eight") {
      return { no: 7, label: "Data Protection & Privacy" };
    } else if (stepNo === "step-nine") {
      return { no: 8, label: "New Starter Declaration" };
    } else {
      return { no: -1, label: "Unknown Step" };
    }
  } else {
    if (stepNo === "step-one") {
      return { no: 0, label: "Client Company Information" };
    } else if (stepNo === "step-two") {
      return { no: 1, label: "Contact Information" };
    } else if (stepNo === "step-three") {
      return { no: 2, label: "Staffing Request Details" };
    } else if (stepNo === "step-four") {
      return { no: 3, label: "Recruitment Process" };
    } else if (stepNo === "step-five") {
      return { no: 4, label: "Agreement & Authorisation" };
    } else {
      return { no: -1, label: "Unknown Step" };
    }
  }
}
