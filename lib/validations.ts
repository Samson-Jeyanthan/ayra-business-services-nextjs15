import z from "zod";

export const ClientSchema = z.object({
  fullName: z.string().min(3),
  companyName: z.string().min(3),
  email: z.email(),
  phoneNo: z.string().min(3),
  message: z.string().min(3),
});
