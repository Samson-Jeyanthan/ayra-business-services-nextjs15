// server actions types

interface IClientRequestParams {
  fullName: string;
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
  prefRole: string;
  prefEmpStatus: string;
  typeOfWork: string;
}
