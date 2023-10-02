import React, { useState } from "react";
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
import project3Image1 from "../../images/movie_app_image1.jpg";
import project3Image2 from "../../images/movie_app_image2.jpg";
import project3Image3 from "../../images/movie_app_image3.jpg";
import project3Image4 from "../../images/movie_app_image4.jpg";
import project3Image5 from "../../images/movie_app_image5.jpg";
import project3Image6 from "../../images/movie_app_image6.jpg";
import project3Image7 from "../../images/movie_app_image7.jpg";
import rwi1 from "../../images/rwi1.jpg";
import rwi2 from "../../images/rwi2.jpg";
import rwi3 from "../../images/rwi3.jpg";
import noteapp from "../../images/note_app.jpg";
import numberGame from "../../images/numberGame.jpg";
import colorFlipper from "../../images/colorFlipper.jpg";
import counter from "../../images/counter.jpg";
import calculator from "../../images/calculator.jpg";
import todo from "../../images/todolist.jpg";
import letterChecker from "../../images/letterChecker.jpg";
import clock from "../../images/clock.jpg";
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
import vercel from "../../images/vercel.jpg";
import cyclic from "../../images/cyclic.jpg";
import firebase from "../../images/firebaseLogo.png";
import movieapi from "../../images/movieDb.jpg";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import gifImage from "../../images/project gif.gif";

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
          <h5 style={{ color: "rgb(156, 164, 188)" }}>Technology Stack : </h5>
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
      <hr className="animated-hr" />
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
              <span style={{ color: "rgb(88, 224, 191)" }}>01</span>.OPEN
              QUESTION DATABASE WEBSITE
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
          <h5 style={{ color: "rgb(156, 164, 188)" }}>Technology Stack : </h5>
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
      <hr className="animated-hr" />
      <section>
        <div className="project2">
          <Carousel>
            <Carousel.Item>
              <img
                src={project3Image1}
                text="One slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project3Image2}
                text="Two slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project3Image3}
                text="Three slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project3Image4}
                text="Four slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project3Image5}
                text="Five slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project3Image6}
                text="Six slide"
                className="firstSlide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project3Image7}
                text="Seven slide"
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
              <span style={{ color: "rgb(88, 224, 191)" }}>02</span>.MOVIE
              WEBSITE
            </h4>
          </section>
          <section>
            <Link
              to={"https://aj-react-p2-movieapp.vercel.app/"}
              target="_blank"
            >
              <Button variant="outline-warning" className="me-2">
                DEMO
              </Button>
            </Link>
            <Link
              to={"https://github.com/saravanan-22/AJ_REACT_P2_MOVIEAPP"}
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
            "🎬 Hello! This is my movie website project created using React. 🎥
            Users can securely create their accounts. 🌟 If you have an interest
            in movies, you can explore a list of all movies, including top-rated
            films, currently showing movies, and trending movies. 🕵️‍♂️ You can
            also search for specific movies to find exactly what you're looking
            for. 🎯 Additionally, we've implemented categories to help you
            choose movies tailored to different situations and preferences. 🎭
            Whether you're in the mood for action, romance, comedy, or any other
            genre, our website makes it easy to discover the perfect film for
            any occasion. 🍿"
          </p>
          <h5 style={{ color: "rgb(156, 164, 188)" }}>Technology Stack : </h5>
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
            <img src={movieapi} />
          </div>
        </div>
      </section>
      <hr className="animated-hr" />
      <section className="javaScriptProject">
        <div>
          <h5
            style={{
              color: "rgb(136, 146, 176)",
              fontSize: "1.5em",
            }}
          >
            JavaScript Projects{" "}
          </h5>
        </div>
        <div className="grid">
          <div className="grid-image">
            <div className="grid-one">
              <div>
                <Container>
                  <h5 style={{ color: "rgb(136, 146, 176)" }}>
                    | REPEATED WORDS IDENTIFIER |
                  </h5>
                  <p
                    style={{
                      textAlign: "justify",
                      padding: "5px",
                      color: "rgb(136, 146, 176)",
                    }}
                  >
                    👋 Here, I have attached my Repeated Words Identifier
                    project. 🚀 This project was created using HTML, CSS,
                    Bootstrap, and JavaScript. 📋 You can paste any paragraph
                    into our website to find repeated words. 🔍
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Link
                      to={"https://dreamy-malabi-322f29.netlify.app/"}
                      target="blank"
                    >
                      <Button variant="outline-dark">DEMO</Button>
                    </Link>

                    <Link
                      to={
                        "https://github.com/saravanan-22/AJ_JS_FCCP-15_12_RWI"
                      }
                      target="blank"
                    >
                      {" "}
                      <Button variant="outline-dark">CODE</Button>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>
            <img src={rwi3} />{" "}
          </div>
          <div className="grid-image">
            <div className="grid-one">
              <div>
                <Container>
                  <h5 style={{ color: "rgb(136, 146, 176)" }}>| NOTE APP |</h5>
                  <p
                    style={{
                      textAlign: "justify",
                      padding: "5px",
                      color: "rgb(136, 146, 176)",
                       fontSize: "0.8em",
                    }}
                  >
                    This note app allows users to quickly add and manage notes
                    📝. To create a new note, simply enter a title and content,
                    then click 'Add Note.' Notes are displayed below the input
                    fields, and you can delete them individually 🗑️. The app
                    also clears input fields after adding a note, streamlining
                    the note-taking process ✨.
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Link
                      to={"https://github.com/saravanan-22/AJ_JS_FCCP-15_14_NA"}
                      target="blank"
                    >
                      <Button variant="outline-dark">DEMO</Button>
                    </Link>

                    <Link
                      to={
                        "https://github.com/saravanan-22/AJ_JS_FCCP-15_12_RWI"
                      }
                      target="blank"
                    >
                      {" "}
                      <Button variant="outline-dark">CODE</Button>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>{" "}
            <img src={noteapp} />
          </div>
          <div className="grid-image">
            <div className="grid-one">
              <div>
                <Container>
                  <h5 style={{ color: "rgb(136, 146, 176)" }}>
                    |GUESS THE NUMBER GAME|
                  </h5>
                  <p
                    style={{
                      textAlign: "justify",
                      padding: "5px",
                      color: "rgb(136, 146, 176)",
                      fontSize: "0.7em",
                    }}
                  >
                    This JavaScript code sets up a simple number guessing game.
                    Players can enter their guesses into an input field and
                    click the 'Check' button. The code generates a random number
                    between 1 and 100, and players are given feedback on whether
                    their guess is too high or too low. When the correct number
                    is guessed, a congratulations message is displayed along
                    with the number of attempts. The input field and 'Check'
                    button are disabled after a correct guess to indicate the
                    end of the game." 🎮
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Link
                      to={"https://roaring-bunny-03ed2a.netlify.app/"}
                      target="blank"
                    >
                      <Button variant="outline-dark">DEMO</Button>
                    </Link>

                    <Link
                      to={
                        "https://github.com/saravanan-22/AJ_JS_FCCP-15_9_GTNG"
                      }
                      target="blank"
                    >
                      {" "}
                      <Button variant="outline-dark">CODE</Button>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>{" "}
            <img src={numberGame} />
          </div>
          <div className="grid-image">
            <div className="grid-one">
              <div>
                <Container>
                  <h5 style={{ color: "rgb(136, 146, 176)" }}>
                    | COLOR FLIPPER |
                  </h5>
                  <p
                    style={{
                      textAlign: "justify",
                      padding: "5px",
                      color: "rgb(136, 146, 176)",
                      fontSize: "0.7em",
                    }}
                  >
                    This JavaScript code offers two options for generating
                    random colors. The 'Simple' button selects a color name from
                    a predefined list and changes the background color of the
                    body to that color. The color name is displayed alongside
                    its hexadecimal value. On the other hand, the 'Hex' button
                    generates a random hexadecimal color code and applies it as
                    the background color. The generated hex code is displayed
                    for reference. Both options provide a fun way to explore
                    different colors with a single click." 🌈
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Link
                      to={"https://cheery-pony-0e764a.netlify.app/"}
                      target="blank"
                    >
                      <Button variant="outline-dark">DEMO</Button>
                    </Link>

                    <Link
                      to={"https://github.com/saravanan-22/AJ_JS_FCCP-15_1_CF"}
                      target="blank"
                    >
                      {" "}
                      <Button variant="outline-dark">CODE</Button>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>{" "}
            <img src={colorFlipper} />
          </div>
          <div className="grid-image">
            <div className="grid-one">
              <div>
                <Container>
                  <h5 style={{ color: "rgb(136, 146, 176)" }}>| COUNTER |</h5>
                  <p
                    style={{
                      textAlign: "justify",
                      padding: "5px",
                      color: "rgb(136, 146, 176)",
                      fontSize: "0.6em",
                    }}
                  >
                    This JavaScript code creates a simple counter that can be
                    incremented, decremented, or reset to zero using three
                    buttons labeled 'D' (for decrement), 'R' (for reset), and
                    'I' (for increment). The current value is displayed on the
                    webpage, and its color changes dynamically based on whether
                    it's negative, zero, or positive. When decremented, the
                    value turns red if it goes below zero, and when incremented,
                    it turns green if it becomes positive. Resetting the value
                    turns it black. This code provides a basic interactive way
                    to track and visualize changes to a numeric value." 📈📉
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Link
                      to={"https://steady-torrone-8ebd92.netlify.app/"}
                      target="blank"
                    >
                      <Button variant="outline-dark">DEMO</Button>
                    </Link>

                    <Link
                      to={
                        "https://github.com/saravanan-22/AJ_JS_FCCP-15_2_COUNTER"
                      }
                      target="blank"
                    >
                      {" "}
                      <Button variant="outline-dark">CODE</Button>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>{" "}
            <img src={counter} />
          </div>
          <div className="grid-image">
            <div className="grid-one">
              <div>
                <Container>
                  <h5 style={{ color: "rgb(136, 146, 176)" }}>
                    | CALCULATOR |
                  </h5>
                  <p
                    style={{
                      textAlign: "justify",
                      padding: "5px",
                      color: "rgb(136, 146, 176)",
                      fontSize: "0.6em",
                    }}
                  >
                    This JavaScript code creates a simple calculator interface.
                    Users can input mathematical expressions by clicking on
                    buttons with numbers, operators, and special functions like
                    'C' for clearing, '⌫' for deleting the last character, and
                    '=' for calculating the result. The input expression is
                    displayed in a result element, and when the user clicks '=',
                    the code evaluates the expression and displays the result.
                    If an error occurs during evaluation, it displays 'Error.'
                    The code also allows users to build and edit the expression
                    character by character, providing basic calculator
                    functionality." 🧮
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Link
                      to={"https://stirring-frangipane-2ef330.netlify.app/"}
                      target="blank"
                    >
                      <Button variant="outline-dark">DEMO</Button>
                    </Link>

                    <Link
                      to={
                        "https://github.com/saravanan-22/AJ_JS_FCCP-15_6_CALCULATOR"
                      }
                      target="blank"
                    >
                      {" "}
                      <Button variant="outline-dark">CODE</Button>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>{" "}
            <img src={calculator} />
          </div>
          <div className="grid-image">
            <div className="grid-one">
              <div>
                <Container>
                  <h5 style={{ color: "rgb(136, 146, 176)" }}>
                    | TO-DO-LIST |
                  </h5>
                  <p
                    style={{
                      textAlign: "justify",
                      padding: "5px",
                      color: "rgb(136, 146, 176)",
                      fontSize: "0.6em",
                    }}
                  >
                    This JavaScript code creates a to-do list application with
                    features for adding, editing, and managing tasks. Users can
                    enter a task in the input field and click the 'Add' button
                    to add it to the to-do list. Each task appears as an item
                    with a checkbox for marking completion, an 'Edit' button for
                    modifying the task name, and a 'Delete' button for removing
                    the task. Completed tasks are moved to a 'Completed' list
                    with a line-through style, and they can be moved back to the
                    to-do list by unchecking the checkbox. The code provides a
                    dynamic and interactive way to manage tasks." 📋✅🗑️
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Link
                      to={"https://vermillion-bubblegum-98b110.netlify.app/"}
                      target="blank"
                    >
                      <Button variant="outline-dark">DEMO</Button>
                    </Link>

                    <Link
                      to={
                        "https://github.com/saravanan-22/AJ_JS_FCCP-15_4_TO-DO-LIST"
                      }
                      target="blank"
                    >
                      {" "}
                      <Button variant="outline-dark">CODE</Button>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>{" "}
            <img src={todo} />
          </div>
          <div className="grid-image">
            <div className="grid-one">
              <div>
                <Container>
                  <h5 style={{ color: "rgb(136, 146, 176)" }}>
                    | REPEATED LETTERS CHECKER |
                  </h5>
                  <p
                    style={{
                      textAlign: "justify",
                      padding: "5px",
                      color: "rgb(136, 146, 176)",
                      fontSize: "0.6em",
                    }}
                  >
                    This JavaScript code takes a user-provided name or word and
                    counts the repeated letters within it, ignoring case. It
                    utilizes an object to keep track of the letter frequencies,
                    and if a letter is repeated and not already included in the
                    list of repeated letters, it is added. The code then
                    generates a result string displaying each repeated letter
                    along with the number of times it occurs. It provides a
                    clear and concise way to identify and display the repeated
                    letters within a given name or word." 📊🔤
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Link
                      to={"https://calm-otter-b2a28e.netlify.app/"}
                      target="blank"
                    >
                      <Button variant="outline-dark">DEMO</Button>
                    </Link>

                    <Link
                      to={
                        "https://github.com/saravanan-22/AJ_JS_FCCP-15_11_RLC"
                      }
                      target="blank"
                    >
                      {" "}
                      <Button variant="outline-dark">CODE</Button>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>{" "}
            <img src={letterChecker} />
          </div>
          {/* <div className="grid-image">
            <div className="grid-one">
              <div>
                <Container>
                  <h5 style={{ color: "rgb(136, 146, 176)" }}>
                    | ANALOG CLOCK |
                  </h5>
                  <p
                    style={{
                      textAlign: "justify",
                      padding: "5px",
                      color: "rgb(136, 146, 176)",
                      fontSize: "0.8em",
                    }}
                  >
                    This JavaScript code creates an analog clock by rotating
                    clock hands (hour, minute, and second hands) to reflect the
                    current time. It uses the setInterval function to update the
                    clock hands every second. The current time is obtained using
                    the Date object, and the degree of rotation for each hand is
                    calculated based on the current hours, minutes, and seconds.
                    The transform CSS property is then used to rotate each clock
                    hand accordingly, creating a real-time analog clock
                    display." 🕰️⏰
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Button variant="outline-dark">DEMO</Button>
                    <Button variant="outline-dark">CODE</Button>
                  </div>
                </Container>
              </div>
            </div>{" "}
            <img src={clock} />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
