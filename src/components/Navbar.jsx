import React from "react";
import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className="Navbar">
      <HashLink to={"/"}>
        <h1 className="navbar-logo">Holy Vible</h1>
      </HashLink>
      <main>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#eBook"}>E-Book</HashLink>
      </main>
    </div>
  );
};

export default Navbar;
