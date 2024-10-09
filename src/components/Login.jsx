import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { auth } from "../firebase/firebase";
import {toast, ToastContainer } from "react-toastify";

const Login = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/))  {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }


    return errors;
  };

  const handleSubmit = async(values) => {
    try {
      await signInWithEmailAndPassword(auth,values.email,values.password)
      toast.success("login successful!"); 
      console.log("login succesfull")
    } catch (error) {
      
    }
   
  };

  return (
   
      <section
        className="relative p-8 min-w-[350px]  w-full min-h-[400px] flex flex-col justify-center place-content-start rounded-xl shadow-lg border border-white/20"
        style={{
          backdropFilter: "blur(3px) saturate(162%)",
          backgroundColor: "rgba( 0, 0, 0, 0.83)",
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Login</h2>
        <Formik
          initialValues={{email: "", password: "" }}
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
                  placeholder="Enter email address"
                  className="w-full p-2 rounded-md bg-white/20 border border-white/40 focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="w-full p-2 rounded-md bg-white/20 border border-white/40 focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
        <ToastContainer/>
      </section>
  );
};

export default Login;