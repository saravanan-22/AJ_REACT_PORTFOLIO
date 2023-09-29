import React from "react";
import "./projects.css";
import Carousel from "react-bootstrap/Carousel";
import project1 from "../../images/quiz_image1.jpg";
import project1Image2 from "../../images/quiz_image2.jpg";
import project1Image3 from "../../images/quiz_image3.jpg";
import project1Image4 from "../../images/quiz_image4.jpg";
import project1Image5 from "../../images/quiz_image5.jpg";
import project1Image6 from "../../images/quiz_image6.jpg";
import project1Image7 from "../../images/quiz_image7.jpg";
import project1Image8 from "../../images/quiz_image8.jpg";
import project2Image1 from "../../images/oqdb_image1.jpg";
import project2Image2 from "../../images/oqdb_image2.jpg";
import project2Image3 from "../../images/oqdb_image3.jpg";
import project2Image4 from "../../images/oqdb_image4.jpg";
import project2Image5 from "../../images/oqdb_image5.jpg";
import project2Image6 from "../../images/oqdb_image6.jpg";
import project2Image7 from "../../images/oqdb_image7.jpg";
import project2Image8 from "../../images/oqdb_image8.jpg";
import project2Image9 from "../../images/oqdb_image9.jpg";
import project2Image10 from "../../images/oqdb_image10.jpg";
import project2Image11 from "../../images/oqdb_image11.jpg";
import project2Image12 from "../../images/oqdb_image12.jpg";
import project2Image13 from "../../images/oqdb_image13.jpg";
import html from "../../images/htmlLogo.png";
import css from "../../images/cssLogo.png";
import bootstrap from "../../images/bootstrapLogo.png";
import js from "../../images/js.jpg";
import react from "../../images/react.jpg";
import node from "../../images/nodeLogo.png";
import express from "../../images/expressLogo.png";
import mongodb from "../../images/mongodbLogo.png";
import github from "../../images/github.jpg";
import material from "../../images/material Ui.png";
import vercel from "../../images/react.jpg";
import cyclic from "../../images/cyclic.jpg";
import firebase from "../../images/firebaseLogo.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <section>
        <div>
          <h2 className="m-0 p-0 mb-3" style={{ color: "rgb(197, 207, 238)" }}>
            Some of My Works
          </h2>
          <h5 style={{ color: "rgb(136, 146, 176)" }}>MERN Project </h5>
        </div>
        <div className="project1">
          <Carousel>
            <Carousel.Item>
              <img src={project1} text="One slide" className="firstSlide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project1Image2}
                text="Two slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project1Image3}
                text="Three slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project1Image4}
                text="Four slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project1Image5}
                text="Five slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project1Image6}
                text="Six slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project1Image7}
                text="Seven slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project1Image8}
                text="Eight slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2em",
          }}
        >
          <section>
            <h4 style={{ color: "rgb(193, 203, 233)" }}>QUIZ GAME</h4>
          </section>
          <section>
            <Link to={"https://quizgame2023.vercel.app/"} target="_blank">
              <Button variant="outline-warning" className="me-2">
                DEMO
              </Button>
            </Link>
            <Link
              to={"https://github.com/saravanan-22/AJ_REACT_MERN_P3_QUIZAPP"}
              target="_blank"
            >
              <Button variant="outline-warning">CODE</Button>
            </Link>
          </section>
        </div>
        <div>
          <p
            className="mt-2"
            style={{
              color: "rgb(136, 146, 176)",
              textAlign: "justify",
              fontSize: "1.2em",
            }}
          >
            Our quiz game website is an engaging platform that offers a fun and
            educational experience for users of all ages. Powered by the MERN
            (MongoDB, Express.js, React, and Node.js) stack, and hosted using
            Cyclic for the backend and Vercel for the frontend, our website
            combines the latest web technologies with a vast database of
            challenging quizzes. Users can test their knowledge across a wide
            range of topics, from science and history to pop culture and sports.
            With user-friendly registration and login features, anyone can
            create an account securely and start exploring a world of quizzes.
            The website provides an intuitive interface, and real-time scoring.
            Whether you're looking to learn something new or simply have fun,
            our MERN-based quiz game website offers an enjoyable and educational
            experience for all.
          </p>
          <div className="mernImages">
            <img src={html} />
            <img src={css} />
            <img src={bootstrap} />
            <img src={js} />
            <img src={react} />
            <img src={node} />
            <img src={express} />
            <img src={mongodb} />
            <img src={github} />
            <img src={vercel} />
            <img src={cyclic} />
            <img src={material} />
            <img src={firebase} />
          </div>
        </div>
      </section>
      <hr style={{ color: "rgb(88, 224, 191)", margin: "3em 0" }} />
      <section>
        <div>
          <h5
            style={{
              color: "rgb(136, 146, 176)",
              fontSize: "1.5em",
            }}
          >
            React Projects{" "}
          </h5>
        </div>
        <div className="project2">
          <Carousel>
            <Carousel.Item>
              <img
                src={project2Image1}
                text="One slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project2Image2}
                text="Two slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project2Image3}
                text="Three slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project2Image4}
                text="Four slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project2Image5}
                text="Five slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project2Image6}
                text="Six slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project2Image7}
                text="Seven slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project2Image8}
                text="Eight slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project2Image9}
                text="Nine slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project2Image10}
                text="Ten slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project2Image11}
                text="Eleven slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project2Image12}
                text="Twelve slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project2Image13}
                text="Thirteen slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2em",
          }}
        >
          <section>
            <h4 style={{ color: "rgb(193, 203, 233)" }}>
              OPEN QUESTION DATABASE WEBSITE
            </h4>
          </section>
          <section>
            <Link
              to={"https://openquestionsadddatabase.netlify.app/"}
              target="_blank"
            >
              <Button variant="outline-warning" className="me-2">
                DEMO
              </Button>
            </Link>
            <Link
              to={"https://github.com/saravanan-22/AJ_REACT_P1-OQDP"}
              target="_blank"
            >
              <Button variant="outline-warning">CODE</Button>
            </Link>
          </section>
        </div>
        <div>
          <p
            className="mt-2"
            style={{
              color: "rgb(136, 146, 176)",
              textAlign: "justify",
              fontSize: "1.2em",
            }}
          >
            Welcome to our Open Question Database, a dynamic and collaborative
            platform designed to foster knowledge sharing and community
            engagement. Our website is powered by cutting-edge technology,
            utilizing the MERN stack (MongoDB, Express.js, React, and Node.js)
            for robust functionality and a seamless user experience. Here, users
            from around the world can securely create accounts, contributing to
            our growing repository of questions on a wide range of topics, from
            technology and science to arts and culture. Our user-friendly
            interface makes it easy to add, post , filter and delete questions.
            Users can upvote questions, leave comments, and even provide
            answers, facilitating insightful discussions and expanding our
            collective knowledge. With the power of Git for code storage, we
            ensure version control and code collaboration, Vercel takes care of
            our frontend hosting needs. Join us on this exciting journey of
            curiosity, learning, and discovery, as we build a global community
            of question enthusiasts and knowledge seekers.
          </p>
          <div className="mernImages">
            <img src={html} />
            <img src={css} />
            <img src={bootstrap} />
            <img src={js} />
            <img src={react} />
            {/* <img src={node} />
            <img src={express} />
            <img src={mongodb} /> */}
            <img src={github} />
            <img src={vercel} />
            {/* <img src={cyclic} /> */}
            <img src={material} />
            <img src={firebase} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
