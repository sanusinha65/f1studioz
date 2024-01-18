import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-light bg-dark text-white">
      <a className="navbar-brand header_class" href="/">
        <img
          src="/logo 2.png"
          width="90%"
          height="100%"
          className="d-inline-block align-top"
          alt=""
        />
      </a>
    </nav>
  );
}

export default Header;
