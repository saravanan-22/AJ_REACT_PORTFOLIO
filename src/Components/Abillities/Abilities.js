import React from "react";
import "./abilities.css";
import image1 from "../../images/htmlLogo.png";
import image2 from "../../images/cssLogo.png";
import image3 from "../../images/bootstrapLogo.png";
import image4 from "../../images/react.jpg";
import image5 from "../../images/js.jpg";
import image6 from "../../images/nodeLogo.png";
import image7 from "../../images/github.jpg";
import image8 from "../../images/expressLogo.png";
import image9 from "../../images/firebaseLogo.png";
import image10 from "../../images/mongodbLogo.png";
import image11 from "../../images/postman.jpg";
import image12 from "../../images/netlify-logo.png"
import gif from "../../images/68747470733a2f2f6c66736f6c7574696f6e732e6e65742f77702d636f6e74656e742f75706c6f6164732f323032312f31322f46756c6c2d537461636b2d446576.gif";

const Abilities = () => {
  return (
    <>
      <h3 style={{ color: "rgb(203, 213, 245)", marginTop: "4em" }}>
        Abilities
      </h3>
      <div className="mt">
        <section className="skillsImages">
          {" "}
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
          <img src={image5} />
          <img src={image4} />
          <img src={image6} />
          <img src={image8} />
          <img src={image10} />
          <img src={image9} />
          <img src={image11} />
          <img src={image7} />
          <img src={image12}/>
        </section>
        <section className="gif">
          <img src={gif} />
        </section>
      </div>
    </>
  );
};

export default Abilities;
