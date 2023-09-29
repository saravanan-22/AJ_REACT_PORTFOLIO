import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
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
import { Link } from "react-scroll";
import Headroom from "react-headroom";
import {useNavigate} from "react-router-dom"

function Header() {
  const navigate =  useNavigate()

  const handleNavigation = () => {
    navigate("/")
  }
  return (
    <div>
      <Headroom style={{ zIndex: "100" }}>
        <Navbar expand="lg" style={{ background: "rgba(0, 0, 0, 0.7)" }} className="shadow">
          <h6 style={{ color: "rgb(100, 255, 218)" }}>S</h6>
          <div className="container-fluid justify-content-between">
            <Navbar.Brand
              style={{ color: "rgb(204, 214, 246)", fontSize: "20px" }}
            >
              <FaHornbill className="logo"  onClick={handleNavigation} style={{cursor : "pointer"}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link
                  activeClass="active"
                  to="home"
                  className="home  me-4 mt-1"
                  style={{ color: "rgb(204, 214, 246)" }}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={100}
                 
                >
                  {" "}
                  <FaHouseChimney className="pb-1" /> START HERE
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  className="home me-4 mt-1"
                  style={{ color: "rgb(204, 214, 246)" }}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={100}
                >
                  {" "}
                  <FaBookOpenReader className="pb-1" /> WHO I AM?
                </Link>
                {/* <Link
                  activeClass="active"
                  to="qualifications"
                  className="home me-4 mt-1"
                  style={{ color: "rgb(204, 214, 246)" }}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={100}
                >
                  {" "}
                  <FaBookOpenReader className="pb-1" />
                  QUALIFICATIONS
                </Link>
                <Link
                  activeClass="active"
                  to="Abilities"
                  className="home me-4 mt-1"
                  style={{ color: "rgb(204, 214, 246)" }}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={100}
                >
                  {" "}
                  <FaBookOpenReader className="pb-1" />
                  ABILITIES
                </Link> */}
                <Link
                  activeClass="active"
                  to="projects"
                  className="home me-4 mt-1"
                  style={{ color: "rgb(204, 214, 246)" }}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={100}
                >
                  {" "}
                  <FaRectangleList className="pb-1" /> CREATIONS
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  className="home me-4 mt-1"
                  style={{ color: "rgb(204, 214, 246)" }}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={100}
                >
                  {" "}
                  <FaSquarePhone className="pb-1" /> GET IN TOUCH
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </Headroom>
    </div>
  );
}

export default Header;
