// server actions types

interface IClientRequestParams {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phoneNo: string;
  message: string;
}

interface ICandidateRequestParams {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  address: string;
  prefferedRole: string;
  prefferedEmploymentStatus: string;
  typeOfWork: string;
}

interface AuthCredentials {
  username: string;
  email: string;
  password: string;
}

interface ICandidateRegStepOneParams {
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
}

interface ICandidateRegStepTwoParams {
  title: string;
}

interface ICandidateRegStepThreeParams {
  title: string;
}

interface ICandidateRegStepFourParams {
  title: string;
}
interface ICandidateRegStepFiveParams {
  title: string;
}
interface ICandidateRegStepSixParams {
  title: string;
}

interface ICandidateRegStepSevenParams {
  title: string;
}
interface ICandidateRegStepEightParams {
  title: string;
}
interface ICandidateRegStepNineParams {
  title: string;
}
