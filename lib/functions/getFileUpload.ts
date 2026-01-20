import { getSignedURL } from "../actions/utils.action";

interface GetFileUploadParams {
  file: File | Blob | null;
  fileType: string;
}

export async function getFileUpload({ file, fileType }: GetFileUploadParams) {
  if (!file)
    return {
      status: 400,
      res: "No files selected",
    };

  // this is a uility function
  const signedURLResult = await getSignedURL({
    fileType,
  });

  console.log(signedURLResult, "signedURLResult");

  if (signedURLResult.failure !== undefined) {
    console.log(signedURLResult.failure);
    return {
      status: 400,
      res: signedURLResult.failure,
    };
  }

  const url = signedURLResult.success;

  console.log(url, "fileUpload");

  const res = await fetch(url, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": fileType,
    },
  });

  console.log(res, "res");

  if (res.ok) {
    const resMediaURL = url.split("?")[0];

    return {
      status: 200,
      res: resMediaURL,
    };
  }
}
