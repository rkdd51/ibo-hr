import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import logo from "../assets/media/logo.svg";
import { Routing } from "../utils/routes";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <header className="top-header">
      <Navbar expand="lg">
        <div onClick={() => navigate("/")}>
          <Navbar.Brand>
            <img src={logo} className="logo" alt="McKinsey & Company" />
          </Navbar.Brand>
        </div>
        <Navigation />
      </Navbar>
    </header>
  );
};
export default Header;
