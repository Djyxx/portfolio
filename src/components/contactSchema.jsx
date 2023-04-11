import * as yup from "yup";

const contactSchema = yup.object().shape({
  nom: yup
    .string()
    .required("Please enter your Surname")
    .matches(/^[A-Za-z]+$/, {
      message: "Please enter valid Surname.",
    }),
  prenom: yup.string().matches(/^[A-Za-z]+$/, {
    message: "Please enter valid Firstname.",
  }),

  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),

  telephone: yup.string().matches(/^(?:[0-9]?){6,14}[0-9]$/gm, {
    message: "Please enter only number.",
  }),

  objet: yup.string().required("Enter a object"),

  message: yup.string().required("A message is required"),
});

export default contactSchema;
