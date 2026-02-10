export function getStageNumber({
  stepNo,
  isCandidStep,
}: {
  stepNo: string | number;
  isCandidStep: boolean;
}) {
  if (isCandidStep) {
    if (stepNo === "step-1") {
      return { no: 0, label: "Personal Information" };
    } else if (stepNo === "step-2") {
      return { no: 1, label: "Next of Kin" };
    } else if (stepNo === "step-3") {
      return { no: 2, label: "Criminal Convictions" };
    } else if (stepNo === "step-4") {
      return { no: 3, label: "Pay" };
    } else if (stepNo === "step-5") {
      return { no: 4, label: "Your Driving" };
    } else if (stepNo === "step-6") {
      return { no: 5, label: "References" };
    } else if (stepNo === "step-7") {
      return { no: 6, label: "Preferences" };
    } else if (stepNo === "step-8") {
      return { no: 7, label: "Data Protection & Privacy" };
    } else if (stepNo === "step-9") {
      return { no: 8, label: "New Starter Declaration" };
    } else {
      return { no: -1, label: "Unknown Step" };
    }
  } else {
    if (stepNo === "step-1") {
      return { no: 0, label: "Client Company Information" };
    } else if (stepNo === "step-2") {
      return { no: 1, label: "Contact Information" };
    } else if (stepNo === "step-3") {
      return { no: 2, label: "Staffing Request Details" };
    } else if (stepNo === "step-4") {
      return { no: 3, label: "Recruitment Process" };
    } else if (stepNo === "step-5") {
      return { no: 4, label: "Agreement & Authorisation" };
    } else {
      return { no: -1, label: "Unknown Step" };
    }
  }
}

export function formatDateToReadable(dateInput: string | Date): string {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  if (isNaN(date.getTime())) {
    return "";
  }

  return date.toDateString();
}
