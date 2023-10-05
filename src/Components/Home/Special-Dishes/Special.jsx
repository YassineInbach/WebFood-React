import React from "react";
import "./Special.css";
import Card from "./Cards/Card";
import CardData from "./Cards/CardData";
import Button from "../../UI/Button";

const Special = () => {
  return (
    <section>
      <div className="special">
        <div className="special-content">
          <h1>Our Special Dishes</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="cards">
        <Card details = {CardData} />
        </div>
        <div className="btns">
          <Button type = "submite" color = "white"> View All </Button>
        </div>
      </div>
    </section>
  );
};

export default Special;
