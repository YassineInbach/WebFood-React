import React from "react";
import { BsClockFill } from "react-icons/bs";
import { MdAddCall } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import "./ContactHome.css";
import ContactReservation from "./Make-Reservation/ContactReservation";

const ContactHome = () => {
  return (
    <section>
      <div className="container-contact">
        <div className="box-contact">
          <div className="contact">
            <MdAddCall className="icone" />
            <h3>Phone</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
            <p>+1 (555) 000-0000</p>
          </div>
          <div className="contact">
            <BsClockFill className="icone" />
            <h3>Open Hours</h3>
            <p>Monday - Friday | 8:00am- 9:00pm</p>
            <p>Saturday - Sunday | 8:00am- 4:00pm</p>
          </div>
          <div className="contact">
            <HiLocationMarker  className="icone" />
            <h3>Office</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
            <p>123 Sample St, Sydney NSW 2000 AU</p>
          </div>
        </div>
        <ContactReservation />
      </div>
    </section>
  );
};

export default ContactHome;
