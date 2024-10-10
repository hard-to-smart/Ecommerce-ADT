import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { ToastContainer } from "react-toastify";
const LoginTest = () => {
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
    <section
      id="login"
      className="relative p-8 min-w-[350px] w-fit min-h-[400px] flex bg-blend-overlay bg-cover flex-col justify-center place-content-start rounded-xl shadow-lg border border-white/20"
      style={{
        backdropFilter: "blur(3px) saturate(162%)",
        background: `url('https://media.istockphoto.com/id/1413749376/vector/vector-characters-silhouettes-unrecognizable-portraits-of-women-and-men-group-of-people.jpg?s=612x612&w=0&k=20&c=SuivAqMDMExzfdI0KK-qFFDQcgRH0YX_D731Dv8gFeE=')`,
        backgroundRepeat:"no-repeat"
      }}
    >
     <div className="absolute bg-black/50 rounded-xl "></div>

      <h2 className="text-2xl font-bold text-white mb-4 text-center">Login</h2>
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
            <div className="mb-4">
              <label htmlFor="email"> Email Id </label>

              <Field
                type="email"
                name="email"
                placeholder="Enter email address"
                className="rounded-3xl w-full p-2 bg-white/20 font-semibold outline-4 focus:ring-2 focus:outline-none focus:ring-lime-100"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password"> Password </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                className="rounded-3xl w-full p-2 bg-white/20 font-semibold focus:ring-2 focus:outline-none focus:ring-lime-100"
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
              class="text-gray-900 bg-gradient-to-r w-full from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-20 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </section>
  );
};

export default LoginTest;
