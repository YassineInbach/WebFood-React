import React from "react";
import { AiFillStar } from "react-icons/ai";
import "../../ContactHome/ContactHome.css";
import avatar1 from "../../../../../public/Images/avatar1.png";
import avatar3 from "../../../../../public/Images/avatar3.png";
import avatar2 from "../../../../../public/Images/avatar2.png";
export default function HappyCustomers() {
  return (
    <section>
      <div className="happy-customers">
        <div className="customers-info">
          <h2>Our Happy Customers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="customers-cards">
          <div className="customers">
            <div className="icons">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <div className="customers-content">
              <img src = {avatar1} alt="" />
              <div className="content">
                <h4>Wade Warren</h4>
                <p>Position, Company name</p>
              </div>
            </div>
          </div>

          <div className="customers">
            <div className="icons">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <div className="customers-content">
              <img src = {avatar3} alt="" />
              <div className="content">
                <h4>Albert Flores</h4>
                <p>Position, Company name</p>
              </div>
            </div>
          </div>

          <div className="customers">
            <div className="icons">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <div className="customers-content">
              <img src = {avatar2} alt="" />
              <div className="content">
                <h4>Jenny Wilson</h4>
                <p>Position, Company name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
