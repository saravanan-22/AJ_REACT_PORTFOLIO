import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./getInTouch.css";
import { Button} from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import {
  FaGithub,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaSpaceAwesome,
  FaSquareTwitter,
  FaTelegram,
} from "react-icons/fa6";
import { BsFillRocketFill } from "react-icons/bs";

function GetInTouch() {
  const form = useRef();
  const [reset , setReset] = useState()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ufunyy3",
        "template_y9sax0w",
        form.current,
        "tMwv9F49XPbjUML8H"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message send");
          setReset("")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="contactDiv">
        <section className="contact"></section>
        <section className="image2">
          <form ref={form} onSubmit={sendEmail}>
            <h3>GET IN TOUCH!</h3>
            <label>Name :</label>
            <input type="text" name="from_name" value = {reset} required/>
            <label>Email :</label>
            <input type="email" name="from_email" value = {reset} required/>
            <label>Message :</label>
            <textarea name="message" value = {reset} required/>
            <Button
              type="submit"
              value="Send"
              variant="outline-primary"
              className="mt-2"
            >
              Send
            </Button>
          </form>
        </section>
      </div>
      <footer clasName="new_footer_area bg_color">
        <div className="icons">
          <section>
            <RouterLink
              to={"https://github.com/saravanan-22"}
              target="black"
              className="me-2"
              style={{ color: "inherit" }}
            >
              <FaGithub
                className="icon1"
                style={{ color: "rgb(111, 119, 143)" }}
              />
            </RouterLink>
            <RouterLink
              to={"https://www.linkedin.com/in/saravanan-r-903311265/"}
              target="blank"
              className="me-2"
              style={{ color: "inherit" }}
            >
              <FaLinkedin
                className="icon1"
                style={{ color: "rgb(111, 119, 143)" }}
              />
            </RouterLink>
            <RouterLink className="me-2" style={{ color: "inherit" }}>
              <FaInstagram
                className="icon1"
                style={{ color: "rgb(111, 119, 143)" }}
              />
            </RouterLink>
            <RouterLink className="me-2" style={{ color: "inherit" }}>
              <FaSquareTwitter
                className="icon1"
                style={{ color: "rgb(111, 119, 143)" }}
              />
            </RouterLink>
            <RouterLink style={{ color: "inherit" }}>
              <FaTelegram
                className="icon1"
                style={{ color: "rgb(111, 119, 143)" }}
              />
            </RouterLink>
          </section>
          <section className="homeI">
            <ScrollLink to="home">
              {" "}
              <BsFillRocketFill style={{ color: "rgb(111, 119, 143)" }} />
            </ScrollLink>
            <h6 className="NavIcon" style={{ color: "white", padding: 0, margin: 0 }}>Home!</h6>
          </section>
        </div>
        <div className="new_footer_top">
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        
      </footer>
      <span className="copyRights m-0 p-0" style={{ color: "rgb(111, 119, 143)" }}>
            &copy; Saravanan {new Date().getFullYear()} All Rights Reserved.
          </span>
    </div>
  );
}

export default GetInTouch;
