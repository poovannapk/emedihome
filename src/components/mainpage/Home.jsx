import React from "react";
import Categories from "./categories";
import SliderHome from "./slider";
import './home.css'

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <SliderHome />
        </div>
      </section>
    </div>
  );
};

export default Home;
