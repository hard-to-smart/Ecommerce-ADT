import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

const ContactForm = () => {
    const validate=(values) =>{
        const errors={};
        if (!values.email){
            errors.email= "Email is required";
        }
        else if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/))  {
            errors.email = 'Invalid email address';
          }
        if(!values.subject){
            errors.subject ="Subject is required"
        }
        if(!values.message){
            errors.message="Please enter your message / feedback"
        }
        return errors;
    }
    const handleSubmit = (values) =>{
        console.log(values);
    }

  return (
    <section
        className="relative p-8 min-w-[350px]  w-full min-h-[400px] flex flex-col justify-center place-content-start rounded-xl shadow-lg border border-white/20"
        style={{
          backdropFilter: "blur(3px) saturate(162%)",
          backgroundColor: "rgba( 0, 0, 0, 0.83)",
        }}>
    <h2 className="text-2xl font-bold text-white mb-4 text-center">Contact</h2>

      <Formik
        initialValues={{ email: "", subject: "", message: "" }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => {
            return (
          <Form>
              <div className="mb-4">
              <Field
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full  p-2 rounded-md bg-white/20 border border-white/40 focus:outline-none focus:border-blue-500"
                />
              <ErrorMessage
                name="email"
                component="span"
                className="text-red-900 text-sm"
              />
            </div>
            <div className="mb-4">
            <Field
                type="text"
                name="subject"
                placeholder="Enter the subject"
                className="w-full  p-2 rounded-md bg-white/20 border border-white/40 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="subject"
                component="span"
                className="text-red-900 text-sm"
              />
            </div>
            <div className="mb-4">
            <Field
                type="textarea"
                name="message"
                placeholder="Message...."
                className="w-full  p-2 rounded-md bg-white/20 border border-white/40 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="message"
                component="span"
                className="text-red-900 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-200 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </Form>
            )
        }}
      </Formik>
    </section>
  );
};

export default ContactForm;
