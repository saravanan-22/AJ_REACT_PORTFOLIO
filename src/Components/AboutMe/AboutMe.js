import React from "react";
import "./aboutMe.css";
import Button from "react-bootstrap/esm/Button";
import { FaFileArrowDown } from "react-icons/fa6";
import image from "../../images/photo.png";
import resume from "../../resume/resume_saravanan.pdf"

function AboutMe() {
  return (
    <div>
      <section className="aboutMe-section">
        <div className="text">
          <h3>Who I Am ----------------------------------</h3>
          <p>
            "👋 Hello, my name is Saravanan. 🎓 I completed my BBA degree in
            2020 and subsequently gained work experience in the garments sector
            for a few years. However, I decided to pivot my career and pursue my
            newfound interest in web development. 🌐 I enrolled in a web
            development course at Skill Safari, where I honed my skills in
            various aspects of web development, with a focus on React.
            <br />
            <br />
            🛠️ During the course, I had the opportunity to work on numerous
            projects, allowing me to apply and solidify my knowledge. 🚀 Now, I
            am actively seeking job opportunities to further my career growth
            and expand my expertise in the field of web development."
          </p>
          <Button
            variant="warning"
            href={resume}
            download
          >
            <FaFileArrowDown /> Resume
          </Button>
        </div>
        <div className="image">
          <div></div>
          <img src={image} alt="profilePhoto" className="photo" />
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
