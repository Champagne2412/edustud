import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container" name="home">
      <div className="hero-text">
        <h1>Your Journey to Better Learning Starts Here.</h1>
        <p>
          Discover easy-to-understand lessons, study resources, and tools
          designed to help you learn at your own pace.
        </p>
        <Link to="programs" smooth={true} offset={-260} duration={500}>
          <button className="btn">
            Explore more <img src={dark_arrow} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
