import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import logo from "./logo.svg";
import Slidebar from "./Slidebar";
import Social from "./Social";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="link-container show-container">
         <Slidebar />
        </div>
        <Social />
      </div>
    </nav>
  );
};

export default Navbar;
