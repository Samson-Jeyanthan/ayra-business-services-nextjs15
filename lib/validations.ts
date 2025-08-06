import z from "zod";

export const ClientSchema = z.object({
  fullName: z.string().min(3),
  companyName: z.string().min(3),
  email: z.email(),
  phoneNo: z.string().min(3),
  message: z.string().min(3),
});

export const CandidateSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.email(),
  phoneNo: z.string().min(3),
  address: z.string().min(3),
  prefferedRole: z.string().min(3),
  prefferedEmploymentStatus: z.string().min(3),
  typeOfWork: z.string().min(3),
});
