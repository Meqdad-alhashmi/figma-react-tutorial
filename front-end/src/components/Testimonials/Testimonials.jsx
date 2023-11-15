import React from "react";
import "./Testimonials.css";
import { rectangle19, rectangle20, rectangle21 } from "../../assets/index";

const Testimonials = () => {
  return (
    <section id="testimonials" className="dark">
      <div className="wrapper">
        <h2>What our students say?</h2>
        <div className="content-container">
          <div className="testimonial">
            <img src={rectangle19} alt="" />
            <div className="reviewer-details">
              <div className="name">Peter Adams</div>
              <div className="company">Google</div>
              <div className="review">
                This is a great course. I got to learn a lot.
              </div>
            </div>
          </div>
          <div className="testimonial">
            <img src={rectangle20} alt="" />
            <div className="reviewer-details">
              <div className="name">Robert Fox</div>
              <div className="company">X</div>
              <div className="review">
                I got to learn a lot about Music Production with this course.
                Thanks :)
              </div>
            </div>
          </div>
          <div className="testimonial">
            <img src={rectangle21} alt="" />
            <div className="reviewer-details">
              <div className="name">Emily Smith</div>
              <div className="company">Apple</div>
              <div className="review">Awesome! Great job!!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
