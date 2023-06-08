import React from "react";
import github from "../assets/github-mark-white.png";

function Footer() {
  return (
    <div className="footer--cont">
      2023 JustWaveThings{" "}
      <a href="https://github.com/JustWaveThings">
        <img src={github} alt="github" height={20} />
      </a>{" "}
    </div>
  );
}

export default Footer;
