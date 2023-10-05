import React from "react";
import img from "../../../../../public/Images/img.png";
import Button from "../../../UI/Button";
export default function ContactReservation() {
  return (
    <div className="contactReservation">
      <div className="reservation">
        <h3>Tajine</h3>
        <h2>Make a reservation</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <form action="">
          <div className="input" id = "inpt">
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" placeholder="name" />
          </div>
          <div className="input-group">
            <div className="input" >
              <label htmlFor="">Date</label>
              <input type="date" name="" id="" />
            </div>
            <div className="input">
              <label htmlFor="">Phone</label>
              <input type="tel" name="" id="" placeholder="phone" />
            </div>
            <div className="input">
              <label htmlFor="">Guest Number</label>
              <input  type="number" name="" id="" placeholder="number" />
            </div>
            <div className="input">
              <label htmlFor="">Time</label>
              <input type="number" name="" id="" placeholder="Time"
              />
            </div>
          </div>
          <div className="textarea">
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="check">
            <input type="checkbox" name="" id="" />
            <p>I accept the <span>Terms</span></p>
          </div>
          <div className="btns">
            <Button type = "submit" color = "white"> Submit</Button>
          </div>
        </form>
      </div>
      <img src={img} alt="" />
    </div>
  );
}
