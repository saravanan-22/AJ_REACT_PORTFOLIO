import React from "react";
import "./background.css";

function Background() {
  return (
    <div className="main-div">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <p className="fz-5">Hi, my name is</p>
        <ul>
  <li>
    <input type="checkbox" />
    <div>P</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>R</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>A</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>T</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>H</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>A</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>M</div>
  </li>
</ul>
      </div>
    </div>
  );
}

export default Background;
