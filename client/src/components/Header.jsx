import React from "react";
import logo from "../assets/images/Logo.png";
import Navbar from '../components/Navbar.jsx'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-navy text-lgray body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/home">
            <div className="w-20 h-10 rounded ">
              <img src={logo} alt="new" width="100%" />
            </div>
          </Link>
          <Navbar />

        </div>
      </header>
    </>
  );
};

export default Header;
