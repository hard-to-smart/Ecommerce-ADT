import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom'
import navbg from "../assets/navbg.jpg"

const Header = () => {
  return (
    <header className=" px-4 py-2  text-white bg-gray-900 flex flex-row justify-between shadow-lg bg-cover -mx" 
    // style={{backgroundImage:`url(${navbg})`}}
    >
      <NavLink to='/'>
        <img src={logo} className="w-10 h-10" />
      </NavLink>
      <ul>
        <NavLink to='/product'> Products</NavLink>
        <NavLink to='/blog'> Blogs</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
      </ul>
      <div>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
    </header>
  );
};

export default Header;
