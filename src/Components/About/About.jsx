import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import Play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about-icon" className="about-img" />
        <img src={Play_icon} alt="play-icon" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Empowering Students Through Simplified Learning</h2>
        <p>
          EduStud was created with a simple mission to make learning easier,
          clearer, and more accessible for every student. We understand how
          overwhelming education can feel, so we provide structured content and
          tools that help you learn smarter, not harder.
        </p>
        <p>
          Our platform focuses on breaking down complex topics into
          easy-to-understand lessons. Whether you’re studying for school, exams,
          or personal growth, EduStud offers resources designed to support your
          learning journey at every step.
        </p>
        <p>
          At EduStud, we believe education should be engaging and stress-free.
          That’s why we’re committed to constantly improving, adding new study
          materials, and creating a learning experience that truly works for
          you.
        </p>
      </div>
    </div>
  );
};

export default About;
