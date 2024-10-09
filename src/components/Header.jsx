import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import navbg from "../assets/navbg.jpg";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between px-4 py-4 text-white bg-gray-900 bg-opacity-50 shadow-lg">
      <div className="absolute inset-0">
        <img src={navbg} className="object-cover w-full h-full opacity-50" />
      </div>
      
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <NavLink to="/" className="relative z-10">
        <img src={logo} alt="Logo" className="w-10 h-10" />
      </NavLink>

      <ul className="relative z-10 flex space-x-6">
        <li>
          <NavLink to="/product" className="hover:text-white">Products</NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="hover:text-white">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="hover:text-white">Cart</NavLink>
        </li>
      </ul>

      <div className="relative z-10">
        <NavLink to="/profile" className="hover:text-gray-300">Profile</NavLink>
      </div>
    </header>
  );
};

export default Header;