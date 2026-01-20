"use server";

import { auth } from "@/auth";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";
import { Session } from "next-auth";

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

type fileUploadProps = {
  fileType: string;
  // fileSize?: number;
  // filePreviousURL?: string;
  // file?: File[];
  // acceptedFileTypes?: string[];
};

const s3 = new S3Client({
  region: process.env.AWS_S3_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});

// customized utility function
export async function getSignedURL({ fileType }: fileUploadProps) {
  let session: Session | null = null;
  session = await auth();

  const userId = session?.user?.id;

  if (!userId)
    return {
      failure: "Unauthorized",
    };

  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: generateFileName(),
    ContentType: fileType,
    Metadata: {
      userId,
    },
  });

  // this url is from aws
  const url = await getSignedUrl(s3, putObjectCommand, {
    expiresIn: 3600,
  });

  // if (filePreviousURL) {
  //   await fetch(filePreviousURL, {
  //     method: "DELETE",
  //   });
  // }

  // const res = await fetch(signedURL, {
  //   method: "PUT",
  //   body: file,
  //   headers: {
  //     "Content-Type": fileType,
  //   },
  // });

  // console.log(res);
  return { success: url };
}
