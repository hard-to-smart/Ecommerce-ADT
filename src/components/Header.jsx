import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import navbg from "../assets/navbg.avif";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa"; // Add icons for mobile menu

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [openProfileDropdown, setOpenProfileDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu

  const handleUserLoggedIn = () => {
    setIsUserLoggedIn((prev) => !prev);
    console.log("clicked");
  };

  const handleOpenProfileDropdown = () => {
    setOpenProfileDropdown((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const ProfileDropdown = () => {
    return (
      <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg">
        <div className="py-2">
          <Link
            to="/profile"
            className="px-6 py-2 text-sm whitespace-nowrap text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={handleOpenProfileDropdown}
          >
            Your Profile
          </Link>
          <Link
            to="#"
            className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => {
              handleOpenProfileDropdown();
              handleUserLoggedIn();
            }}
          >
            Sign out
          </Link>
        </div>
      </div>
    );
  };

  return (
    <header className="relative flex items-center justify-between px-4 py-4 text-white bg-gray-900 bg-opacity-80 shadow-lg">
      {/* Background  */}
      <div className="absolute inset-0 ">
        <img src={navbg} className="object-cover w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Logo */}
      <NavLink to="/" className="relative z-10">
        <img src={logo} alt="Logo" className="w-16 h-14" />
      </NavLink>

      {/* Mobile menu toggle button */}
      <button
        className="relative z-10 text-2xl md:hidden"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation links */}
      <ul
        className={`relative z-10 md:flex md:space-x-6 ${
          isMobileMenuOpen ? "flex flex-col space-y-4 mt-4" : "hidden"
        } md:flex md:flex-row md:space-y-0`}
      >
        <li>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold leading-6"
                : "text-base leading-6 font-semibold text-neutral-300 hover:text-white"
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold leading-6"
                : "text-base leading-6 font-semibold text-neutral-300 hover:text-white"
            }
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold leading-6"
                : "text-base leading-6 font-semibold text-neutral-300 hover:text-white"
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>

      {/* User profile section */}
      <div className="relative z-10">
        {isUserLoggedIn ? (
          <>
            <div
              className="relative rounded-full w-[30px] h-[30px] bg-white hover:ring-2 ring-gray-200 text-slate-900 flex justify-center items-center font-bold"
              onClick={handleOpenProfileDropdown}
            >
              A
            </div>
            {openProfileDropdown && <ProfileDropdown />}
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold leading-6"
                : "text-base leading-6 font-semibold text-neutral-300 hover:text-white"
            }
          >
            Sign In
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
