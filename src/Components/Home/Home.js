import React from "react";
import Header from "../Header/Header";
import "./home.css";
import Carousel from "../Carousal/Carousel";
import { FaCircleArrowDown } from "react-icons/fa6";
import { GiCycle } from "react-icons/gi";

function Home() {
  return (
    <div className="main" >
      <Header/>
      <div className="background-icon"  style={{background : "black"}}>
        <GiCycle className="icon-animation" />
      </div>
      <div className="content-container">
        <div style={{  height: "92vh" }} className="intro">
          <h4 className="nameTag">Hi, my name is </h4>
          <h1 className="name">Saravanan.</h1>
          <h1 className="name-Below">Building Web Wonders with MERN Magic.</h1>
          <p className="name-intro">
            Passionate MERN Stack Developer dedicated to crafting user-friendly,
            inclusive digital solutions for exceptional web experiences. [ Project
            Images <FaCircleArrowDown style={{ color: " rgb(100, 255, 218)" }} />{" "}
            ]
          </p>
          <Carousel />
        </div>
        <section className="vh-100"></section>
        <section className="vh-100"></section>
        <section className="vh-100"></section>
        <section className="vh-100"></section>
        <section className="vh-100"></section>
      </div>
    </div>
  );
}

export default Home;
