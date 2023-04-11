import { Formik, Form, ErrorMessage, Field } from "formik";
import FormField from "../components/FormField";
import contactSchema from "../components/contactSchema";
import TextAreaField from "../components/TextAreaField";
import { forwardRef } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = forwardRef(() => {
  const form = useRef();
  const formikRef = useRef();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false); // State variable for success message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_05a4m0r",
        "template_51286he",
        form.current,
        "qDEPSYfLWhjBqnIRZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          formikRef.current.resetForm();
          setSuccessMessageVisible(true); // Set success message visibility to true
          setTimeout(() => {
            setSuccessMessageVisible(false); // Hide success message after 10 seconds
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div
        id="contact"
        className="flex justify-evenly text-center w-full min-h-[92vh] text-[#F6FFF8] bg-[#9ad6a8]"
      >
        <div className="py-12">
          {successMessageVisible && (
            <div className="w-full bg-[#F6FFF8] text-[#9ad6a8] text-2xl px-4 py-2 my-1 rounded-full ">
              Email envoyé avec succès
            </div>
          )}
          <h2 className="text-5xl text-center font-bold pb-12">
            Contactez-moi
          </h2>
          <Formik
            initialValues={{
              nom: "",
              prenom: "",
              email: "",
              telephone: "",
              objet: "",
              message: "",
            }}
            validationSchema={contactSchema}
            innerRef={formikRef}
          >
            {({ isValid, dirty }) => (
              <Form
                ref={form}
                onSubmit={sendEmail}
                className="text-center text-black"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <FormField
                    type="text"
                    name="nom"
                    label="Nom*"
                    placeholder="Entrez votre nom"
                    className="mx-14 "
                  />
                  <FormField
                    type="text"
                    name="prenom"
                    label="Prénom"
                    placeholder="Entrez votre Prénom"
                    className="mx-14"
                  />

                  <FormField
                    type="email"
                    name="email"
                    label="Email*"
                    placeholder="Entrez votre email"
                    className="mx-14"
                  />
                  <FormField
                    type="tel"
                    name="telephone"
                    label="Téléphone"
                    placeholder="Entrez votre numéro"
                    className="mx-14 "
                  />
                </div>

                <FormField
                  type="text"
                  name="objet"
                  label="Objet*"
                  placeholder="Objet du message"
                  className="mx-14"
                />
                <TextAreaField
                  name="message"
                  label="Message*"
                  placeholder="Entrez votre message"
                  className="mx-14"
                />

                <div className="flex justify-center mx-14 ">
                  <button
                    type="submit"
                    className={`bg-[#F6FFF8] text-[#9ad6a8] text-xl py-2 px-12 mt-4 rounded-full ${
                      !isValid || !dirty ? "" : "hover:bg-gray-400"
                    }`}
                    disabled={!isValid || !dirty}
                  >
                    Envoyer
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="flex flex-col space-y-6 justify-between text-3xl pt-8">
            <div className="flex flex-col justify-center items-center">
              <ion-icon name="at-circle"></ion-icon>
              <p>Djarlane.egblomasse@epitech.eu</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <ion-icon name="call"></ion-icon>
              <p>07.82.24.95.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Contact;
