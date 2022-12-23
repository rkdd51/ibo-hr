import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "@emotion/styled";
import Avatar from "../header/Avatar";
import OfficeDetails from "./OfficeDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//Views
// import { Routing } from "../utils/routes";
import { AnnualIncomeStatement } from "../views/AnnualIncomeStatement/AnnualIncomeStatement";
import { Benefits } from "../views/Benefits/Benefits";
import { Home } from "../views/Home/Home";
import { HRTeam } from "../views//HRTeam/HRTeam";
import { PaySlip } from "../views/PaySlip/PaySlip";
import { PersonalInfoPayroll } from "../views/PersonalInfoPayroll/PersonalInfoPayroll";

function Navigation() {
  return (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div>
          <Nav className="menu-item ml-auto">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavDropdown title="My HR" id="basic-nav-dropdown" className="MyHR">
              <NavDropdown.Item to="/" as={Link}>
                My Personal Info
              </NavDropdown.Item>
              <NavDropdown.Item href="">My PTO</NavDropdown.Item>

              <NavDropdown.Item to="/hr-team" as={Link}>
                My HR Team
              </NavDropdown.Item>

              <NavDropdown.Item href="">
                Employment Declaration Request
              </NavDropdown.Item>
            </NavDropdown>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavDropdown
              title="My Benefits"
              id="basic-nav-dropdown"
              className="MyBenefits"
            >
              <NavDropdown.Item to="/benefits" as={Link}>
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cheque Creche
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Student Check
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Car Plan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Pension fund
              </NavDropdown.Item>
            </NavDropdown>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavDropdown
              title="My Compensation"
              id="basic-nav-dropdown"
              className="MyCompensation"
            >
              <NavDropdown.Item to="/monthly-payslip" as={Link}>
                My Monthly Payslip
              </NavDropdown.Item>
              <NavDropdown.Item to="/annual-income-statement" as={Link}>
                My Annual Income Statement
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                My Severance Plan
              </NavDropdown.Item>
              <NavDropdown.Item to="/my-compensation-memo" as={Link}>
                My Compensation Memos (OLD)
              </NavDropdown.Item>
            </NavDropdown>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Item>
              <Nav.Link>Policies</Nav.Link>
            </Nav.Item>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavDropdown
              title="Admin"
              className="Admin"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item to="/edit-hr-team" as={Link}>
                Edit HR Team
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
        {window.screen.width <= 768 && (
          <Nav>
            <div className="right-side">
              <Avatar />
            </div>
          </Nav>
        )}
      </Navbar.Collapse>

      {window.screen.width > 768 && (
        <Nav>
          <div className="right-side">
            <OfficeDetails />
            <Avatar />
          </div>
        </Nav>
      )}
    </>
  );
}

export default Navigation;
