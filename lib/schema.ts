import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(80, { message: "Name cannot exceed 80 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(2000, { message: "Message cannot exceed 2000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
