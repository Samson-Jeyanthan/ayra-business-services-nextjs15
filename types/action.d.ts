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
