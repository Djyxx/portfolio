import { Formik, Form, ErrorMessage, Field } from "formik";
import FormField from "../components/FormField";
import Button from "../components/ButtonModal";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string("Please enter your full name")
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, "Please enter your full name.")
    .label("name"),
  email: yup
    .string("Please enter a email valid")
    .email("Please enter a email valid")
    .required("Email valid is required")
    .label("email"),
  message: yup.string().label("Message").required(),
});

const Contact = () => {
  const handleSubmit = () => {
    return null;
  };

  return (
    <>
      <div className="flex justify-evenly bg-[#1e1c21] text-[#9ad6a8] w-full h-80 mt-4 ">
        <div className="flex flex-col w-1/3">
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
          >
            <Form className="flex flex-col gap-4">
              <Field
                type="input"
                name="name"
                placeholder="Enter your name"
                className="mx-14"
              />
              <Field type="email" name="email" className="mx-14" />
              <Field
                type="text"
                name="message"
                placeholder="Enter your message"
                className="mx-14 h-24"
              />
            </Form>
          </Formik>
          <div classname="flex flex-col w">
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
