import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginSignupPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="button-container cursor-pointer">
        <div className="mb-4">
          <button
            className={`px-4 py-2 mx-2 font-bold rounded-lg ${
              showLogin ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 mx-2 font-bold rounded-lg ${
              !showLogin ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setShowLogin(false)}
          >
            Register
          </button>
        </div>
        {
          showLogin ? <Login /> : <Register />
        }
      </div>
    </div>
  );
};

export default LoginSignupPage;
