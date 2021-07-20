import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";

const Header: React.FC = () => {
  console.log("header");
  return (
    <header className="tl-header">
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> Who we are </Link>
          </li>
          <li>
            <Link to="/registration"> Portal</Link>
          </li>
        </ul>
      </nav>
      <Logout />
    </header>
  );
};

export default Header;
