import React from "react";
import logo from "../assets/logo1.png";
import { NavLink } from 'react-router-dom';
import navbg from "../assets/navbg.avif";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between px-4 py-4 text-white bg-gray-900 bg-opacity-80 shadow-lg">
      <div className="absolute inset-0 ">
        <img src={navbg} className="object-fill w-full h-full" />
      </div>
      
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <NavLink to="/" className="relative z-10">
        <img src={logo} alt="Logo" className="w-10 h-10 fill-white invert" />
      </NavLink>

      <ul className="relative z-10 flex space-x-6">
        <li>
          <NavLink to="/product" className={({ isActive }) =>
                isActive
                  ? "text-white font-bold leading-6"
                  : "text-base leading-6 font-semibold text-neutral-300 hover:text-white"
              }
            >Products</NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) =>
                isActive
                  ? "text-white font-bold leading-6"
                  : "text-base leading-6 font-semibold text-neutral-300 hover:text-white"
              } >Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) =>
                isActive
                  ? "text-white font-bold leading-6"
                  : "text-base leading-6 font-semibold text-neutral-300 hover:text-white"
              }>Cart</NavLink>
        </li>
      </ul>

      <div className="relative z-10">
        <NavLink to="/login" className={({ isActive }) =>
                isActive
                  ? "text-white font-bold leading-6"
                  : "text-base leading-6 font-semibold text-neutral-300 hover:text-white"
              }> Sign In </NavLink>
      </div>
    </header>
  );
};

export default Header;