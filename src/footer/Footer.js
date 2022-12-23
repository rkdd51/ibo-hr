import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mds/mds-reactjs-library";

import logo from "../assets/media/logo.svg";
import "./Footer.scss"


export const Footer = () => {
  return (
    <footer className="bottom-footer">
      <Container>
        <div className="container-fluid">
        <Link to="/" className="logo-wrapper">
          <img style={{height: "50px"}} src={logo} className="logo" alt="McKinsey & Company" />
        </Link>
        <div className="copy">
          © 1996-{new Date().getFullYear()} McKinsey & Company
        </div>
        </div>
      </Container>
    </footer>
  );
};
