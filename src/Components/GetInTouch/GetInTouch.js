import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./getInTouch.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaSquareTwitter,
  FaTelegram,
} from "react-icons/fa6";

function GetInTouch() {
  const form = useRef();

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
            <input type="text" name="from_name" />
            <label>Email :</label>
            <input type="email" name="from_email" />
            <label>Message :</label>
            <textarea name="message" />
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
            <Link to={"https://github.com/saravanan-22"} target="black">
              <FaGithub className="icon1" />
            </Link>
            <Link to={"https://www.linkedin.com/in/saravanan-r-903311265/"} target="blank">
              <FaLinkedin className="icon1" />
            </Link>
            <Link>
              <FaInstagram className="icon1" />
            </Link>
            <Link>
              <FaSquareTwitter className="icon1" />
            </Link>
            <Link>
              <FaTelegram className="icon1" />
            </Link>
          </section>
        </div>
        <div className="new_footer_top">
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GetInTouch;
