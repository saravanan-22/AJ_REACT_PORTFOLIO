import React from "react";
import Header from "../Header/Header";
import "./home.css";
import Carousel from "../Carousal/Carousel";
import { FaCircleArrowDown } from "react-icons/fa6";
import { GiCycle } from "react-icons/gi";
import AboutMe from "../AboutMe/AboutMe";
import Container from "react-bootstrap/esm/Container";
import Qualifications from "../Qualificaions/Qualifications";
import Abilities from "../Abillities/Abilities";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <div className="main" id="home" style={{ background: "black" }}>
      <Header />

      <Container>
        <div className="background-icon">
          <GiCycle className="icon-animation" />
        </div>
        <div className="content-container">
          <div style={{ height: "92vh" }} className="intro">
            <h4 className="nameTag">The Portfolio of,</h4>
            <h1 className="name">Saravanan.</h1>
            <h1 className="name-Below">
              Building Web Wonders with MERN Magic.
            </h1>
            <p className="name-intro">
              Passionate MERN Stack Developer dedicated to crafting
              user-friendly, inclusive digital solutions for exceptional web
              experiences. [ Project Images{" "}
              <FaCircleArrowDown style={{ color: " rgb(100, 255, 218)" }} /> ]
            </p>
            <Carousel />
          </div>
          <section className="vh-100" id="about">
            <AboutMe />
          </section>
          <section className="vh-200" id="qualifications">
            <Qualifications/>
          </section>
          <section className="vh-100" id="Abilities">
            <Abilities/>
          </section>
          <section className="vh-300" id="projects">
            <Projects/>
          </section>
          <section className="vh-100" id="contact"></section>
        </div>
      </Container>
    </div>
  );
}

export default Home;
