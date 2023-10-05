import React from "react";
import "../ContactHome/ContactHome.css";
import HappyCustomers from "./Our-Happy-Customers/HappyCustomers";
export default function OurAchievement() {
  return (
    <section>
        <div className="achievement">
        <div className="our-achievement">
        <h1>Our Achievement</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="list">
          <div className="list-item">
            <h2>+200</h2>
            <p>Customer Served</p>
          </div>
          <div className="list-item">
            <h2>50K</h2>
            <p>Branches</p>
          </div>
          <div className="list-item">
            <h2>370k</h2>
            <p>Deliveries</p>
          </div>
          <div className="list-item">
            <h2>100+</h2>
            <p>Recognition</p>
          </div>
        </div>
      </div>
      <HappyCustomers />

        </div>
      

    </section>
  );
}
