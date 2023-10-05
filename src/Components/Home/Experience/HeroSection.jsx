import React from "react";
import "./Experience.css";
import Button from "../../UI/Button";

const HeroSection = () => {
  return (
    <section>
        <div className="background">
        <div className="parent">
        <h1>
          Experience the real taste of <span>Best Dishes</span>
        </h1>
        <p>
          Experience the real taste of <span>Dishes</span>
        </p>
        <div className="btns">
          <Button type="submit" color="white">Book a table</Button>
          <Button type="submit" color="transparent">Order Online</Button>
        </div>
      </div>
        </div>
       
    </section>
  );
};
export default HeroSection;
