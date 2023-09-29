import React from "react";
import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <section id="timeline">
        <h3
          className="text-center m-0 p-0"
          style={{ color: "rgb(203, 213, 245)" }}
        >
          Education
        </h3>
        <ul class="line">
          <li>
            <div class="cont">
              <h3>76.8%</h3>
              <p>Government Higher Secondary School, Tirupur , TamilNadu.</p>
              <time>2015-SSLC</time>
            </div>
          </li>
          <li>
            <div class="cont">
              <h3>78.75%</h3>
              <p>Government Higher Secondary School, Tirupur , TamilNadu.</p>
              <time>2017-HSC</time>
            </div>
          </li>
          <li>
            <div class="cont">
              <h3>67.70%</h3>
              <p>Nandha Arts and Science College Erode, TamilNadu.</p>
              <time>2020-BBA</time>
            </div>
          </li>

          <li>
            <div class="cont">
              <h3>Web Development</h3>
              <p>Skill Safari Coimbatore , TamilNadu</p>
              <time>2023-MERN</time>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Qualifications;
