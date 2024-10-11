import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

const ContactForm = () => {
  // form validation
    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)) {
            errors.email = 'Invalid email address';
        }
        if (!values.subject) {
            errors.subject = "Subject is required";
        }
        if (!values.message) {
            errors.message = "Enter message/feedback";
        }
        return errors;
    };

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
      
        <div className="bg-gray-900 bg-opacity-90 md:rounded-tr-[150px] justify-center flex flex-col items-center shadow-lg p-8 md:p-16 w-full md:w-[400px] md:h-[400px]">
          {/* contact form component */}
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Contact</h2>

            <Formik
                initialValues={{ email: "", subject: "", message: "" }}
                validate={validate}
                onSubmit={(values, { setSubmitting }) => {
                    handleSubmit(values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-4">
                            <Field
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                className=" p-2 rounded-lg bg-white/20 border border-white/40 outline-none focus:border-gray-700"
                            />
                            <ErrorMessage
                                name="email"
                                component="p"
                                className=" text-red-700 text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <Field
                                type="text"
                                name="subject"
                                placeholder="Enter the subject"
                                className=" p-2 rounded-lg bg-white/20 border border-white/40 focus:outline-none focus:border-blue-500"
                            />
                            <ErrorMessage
                                name="subject"
                                component="p"
                                className="text-red-700 text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <Field
                                type="textarea"
                                name="message"
                                placeholder="Message...."
                                className="p-2 rounded-lg bg-white/20 border border-white/40 focus:outline-none focus:border-blue-500"
                            />
                            <ErrorMessage
                                name="message"
                                component="p"
                                className="text-red-700 text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ${
                                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            {isSubmitting ? "Submitting..." : "Send Message"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;
