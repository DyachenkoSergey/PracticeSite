import * as yup from "yup";

export const registrationValidation = yup.object({
  name: yup.string().required("Name is required").min(2, "Too Short!"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{4,}$/,
      "Password should be at least 4 symbols, contain at least 1 lowercase letter, 1 uppercase letter"
    ),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export const logInValidation = yup.object({
  name: yup.string().required().min(2, "Too Short!"),
  password: yup.string().required("Password is required"),
});
