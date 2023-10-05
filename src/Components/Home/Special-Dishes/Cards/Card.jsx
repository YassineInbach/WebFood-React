import React from "react";
import "./Card.css";
import Button from "../../../UI/Button";
const Card = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className="card" key={index}>
          <img src={value.img} alt="" />
          <div className="card-info">
            <h4> {value.title} </h4>
            <p> {value.description} </p>
            <div className="btns">
              <Button type="submit"  color="white">
                Order now
              </Button>
              <p> {value.price} </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
