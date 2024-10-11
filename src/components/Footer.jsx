import { NavLink } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <section className="bg-black">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-neutral-300 font-medium leading-6"
                  : "text-base leading-6 text-gray-500 hover:text-neutral-300"
              }
            >
              Products
            </NavLink>
          </div>
          <div className="px-5 py-2">
            <NavLink
              to="blog"
              className={({ isActive }) =>
                isActive
                  ? "text-neutral-300 font-medium leading-6"
                  : "text-base leading-6 text-gray-500 hover:text-neutral-300"
              }
            >
              Blogs
            </NavLink>
          </div>
          <div className="px-5 py-2">
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive
                  ? "text-neutral-300 font-medium leading-6"
                  : "text-base leading-6 text-gray-500 hover:text-neutral-300"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </nav>
        <SocialMediaIcons />
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          &copy; 2024 Ecommerce Website Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
