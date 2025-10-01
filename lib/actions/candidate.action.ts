"use server";

export async function createCandidateRequest(params: ICandidateRequestParams) {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNo,
      address,
      prefRole,
      prefEmpStatus,
      typeOfWork,
    } = params;

    console.log(
      firstName,
      lastName,
      email,
      phoneNo,
      address,
      prefRole,
      prefEmpStatus,
      typeOfWork
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}
