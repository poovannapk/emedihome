import React from "react";
import './header.css'

const Head = () => {
  return (
    <section className="head">
      <div className="container d_flex">
        <div className="left row">
          <i className="fa fa-phone"></i>
          <label>+9620064664</label>
          <i className="fa fa-envelope"></i>
          <label>ajithpoovanna40@gmail.com</label>
        </div>
        <div className="right row RText">
          <label>Theme FAQ's</label>
          <label>Need Helps</label>
          <i className="flag-icon flag-icon-ind"></i>
          <label>EN</label>
          <span>&#8377;</span>
          <label>INR</label>
        </div>
      </div>
    </section>
  );
};

export default Head;
