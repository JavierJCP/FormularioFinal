import z from "zod";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "El nombre debe tener al menos 3 caracteres",
  }),
  email: z.string().email().min(5, {
    message: "El email debe tener al menos 5 caracteres",
  }),
});

export const validateForm = (data: Record<string, unknown>) => {
  return formSchema.safeParse(data);
};
