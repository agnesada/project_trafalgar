import React from "react";
import "./hero.css";
import HeroImage from "../../assets/heroImg.svg";

const Hero = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6">
            <h1 className="health">
              Virtual healthcare <br /> for you
            </h1>
            <p className="mb-4">
              Trafalgar provides progressive, and affordable <br />
              healthcare, accessible on mobile and online <br />
              for everyone
            </p>
            <button className="hero-btn">Consult today</button>
          
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6 ">
          <img className="hero-image" src={HeroImage} alt="i" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
