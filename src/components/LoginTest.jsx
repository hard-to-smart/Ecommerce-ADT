import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const LoginTest = () => {
  const [isLogin, setIsLogin] = useState(true);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-gray-900 bg-opacity-70 rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          {isLogin ? "Login" : "Register"}
        </h2>

        <div className="flex justify-center mb-4">
          <button
            className={`text-sm font-medium ${isLogin ? "text-white" : "text-gray-400"}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <span className="mx-2 text-white">|</span>
          <button
            className={`text-sm font-medium ${!isLogin ? "text-white" : "text-gray-400"}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={validate}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email Address
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="rounded-full w-full p-4 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-gray-400 focus:ring-gray-400 transition duration-200 ease-in-out"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-300">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="rounded-full w-full p-4 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-gray-400 focus:ring-gray-400 transition duration-200 ease-in-out"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-semibold rounded-full text-lg px-5 py-3 transition duration-200 ease-in-out"
              >
                {isSubmitting ? "Submitting..." : isLogin ? "Log In" : "Register"}
              </button>
            </Form>
          )}
        </Formik>

        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginTest;
