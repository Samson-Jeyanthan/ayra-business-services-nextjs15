"use server";

export async function createClientRequestAction(params: IClientRequestParams) {
  try {
    const { fullName, companyName, email, phoneNo, message } = params;

    console.log(fullName, companyName, email, phoneNo, message);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
