import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const forward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const backward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials" name="testimonials">
      <img className="next-btn" src={next_icon} alt="" onClick={forward} />
      <img className="back-btn" src={back_icon} alt="" onClick={backward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sarah N.</h3>
                  <span>Edustud, Nigeria</span>
                </div>
              </div>
              <p>
                EduStud has given me the perfect environment to grow
                academically and professionally. The lecturers truly care about
                our progress.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Michael T.</h3>
                  <span>Edustud, Nigeria</span>
                </div>
              </div>
              <p>
                The institution’s facilities and learning resources are
                impressive. I’ve gained practical skills that prepared me for
                real-world opportunities.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Mary E.</h3>
                  <span>Edustud, Nigeria</span>
                </div>
              </div>
              <p>
                Student life here is vibrant and supportive. From academic
                guidance to extracurricular communities, there’s always room to
                grow.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Daniel O.</h3>
                  <span>Edustud, Nigeria</span>
                </div>
              </div>
              <p>
                What stands out most is the quality of teaching. Every course is
                well-structured, and the lecturers break things down in ways
                that make learning easier.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
