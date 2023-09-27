import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  FaBookOpenReader,
  FaHornbill,
  FaHouseChimney,
  FaRectangleList,
  FaSquarePhone,
} from "react-icons/fa6";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar expand="lg" style={{ background: "#000" }} className="shadow">
        <h6 style={{ color: "rgb(100, 255, 218)" }}>S</h6>
        <div className="container-fluid justify-content-between">
          <Link to={"/"}>
            <Navbar.Brand style={{ color: "rgb(204, 214, 246)", fontSize: "20px" }}>
              <FaHornbill className="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="home me-4" style={{ color: "rgb(204, 214, 246)"}}>
                <FaHouseChimney className="pb-1" /> START HERE
              </Nav.Link>
              <Nav.Link href="#about" className="home me-4" style={{ color: "rgb(204, 214, 246)"}}>
                <FaBookOpenReader className="pb-1" /> WHO I AM?
              </Nav.Link>
              <Nav.Link href="#projects" className="home me-4" style={{ color: "rgb(204, 214, 246)"}}>
                <FaRectangleList className="pb-1" /> CREATIONS
              </Nav.Link>
              <Nav.Link href="#contact" className="home" style={{ color: "rgb(204, 214, 246)"}}>
                <FaSquarePhone className="pb-1" /> GET IN TOUCH
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
