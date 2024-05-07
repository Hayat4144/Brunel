import z from "zod";

const registrationSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
  email: z.string().email({ message: "Please enter a valid email." }),
});

export default registrationSchema;
