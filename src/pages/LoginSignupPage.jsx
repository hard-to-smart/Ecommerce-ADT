import React, { useState } from "react";
import LoginTest from "../components/LoginTest";
import { ToastContainer } from "react-toastify";
import RegisterTest from "../components/RegisterTest";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-gray-900 bg-opacity-70 rounded-lg shadow-lg p-8 max-w-sm w-full">
          <div className="flex justify-center mb-4">
            <button
              className={`text-xl font-medium ${
                isLogin ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <span className="mx-2 text-white">|</span>
            <button
              className={`text-xl font-medium ${
                !isLogin ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
          {isLogin ? <LoginTest /> : <RegisterTest />}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginSignupPage;
