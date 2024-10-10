import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import LoginTest from "../components/LoginTest";
import RegisterTest from "../components/RegisterTest";

const MainToggle = () => {
  const [isLogin, setIsLogin] = useState(true);

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

        {isLogin ? <LoginTest /> : <RegisterTest />}
      </div>
    </div>
  );
};

export default MainToggle;
