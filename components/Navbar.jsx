import React from "react";
import PropTypes from "prop-types";
import { FaRegCopyright } from "react-icons/fa";

function Navbar(props) {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap justify-between p-5 flex-row sm:flex-row items-center">
        <a
          href
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <FaRegCopyright className="" />
          <span className="ml-3 text-xl">Lekan Onaolapo</span>
        </a>
        <nav className="md:ml-auto mb-2 flex flex-wrap items-center text-base justify-center cursor-pointer">
          <a
            href
            className="mr-5 hover:text-gray-900 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out"
          >
            Work
          </a>
          <a
            href
            className="mr-5 hover:text-gray-900  transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out"
          >
            About
          </a>
          <a
            href
            className="mr-5 hover:text-gray-900  transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

Navbar.defaultProps = {
  theme: "indigo",
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Navbar;
