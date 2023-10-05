import React from "react";
import "./Footer.css";
import logo from '../../../public/Images/logo.png';
import Button from "../UI/Button";
export default function Footer() {
  return (
    <footer>
      <div className="newsletter">
        <div className="newsletter-content">
          <h2>Subscribe to our newsletter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h3>Opening Hours</h3>
          <div className="frame-content">
            <div className="frame">
              <p>Monday - Friday</p>
              <p>8:00am to 9:00pm</p>
            </div>
            <div className="frame">
              <p>Saturday - Sunday</p>
              <p>8:00am to 4:00pm</p>
            </div>
          </div>
        </div>
        <div className="actions">
          <form action="">
            <input type="email" name="" id="" placeholder="Your email ...." />
            <Button type="submit" color="transparent">
              {" "}
              Suscribe
            </Button>{" "}
          </form>
          <h3>By subscribing you agree to with our Privacy Policy</h3>
        </div>
      </div>

<hr />

      <div className="links">
        <div className="logo">
          <img src = { logo } alt="" />
          <h2>Ddsgnr</h2>
        </div>
        <div className="colmun">
          <h4>Explore</h4>
          <nav>
            <ul>
              <li><a href="">Menu</a></li>
              <li><a href="">Locations</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Communities Servies</a></li>
            </ul>
          </nav>
        </div>
        <div className="colmun">
        <h4>Top Dishes</h4>
          <nav>
            <ul>
              <li><a href="">Bengali Cut (without Head)</a></li>
              <li><a href="">Premium Grade Mackerel (Cleaned)</a></li>
              <li><a href="">Basa Fillet (Platinum Grade)</a></li>
              <li><a href="">Medium Prawns - Without Tail Seer (Surmai)</a></li>
              <li><a href="">Bengali Cut</a></li>
            </ul>
          </nav>
        </div>
        <div className="colmun">
        <h4>About Us</h4>
          <nav>
            <ul>
              <li><a href="">Contact</a></li>
              <li><a href="">Help/Support</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Terms and Conditions</a></li>
              <li><a href="">Partners</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <hr />
      <div class="made-with">
            <p>© 2023 - Made with ❤️ by <span>Yassine Inbach</span></p>
        </div>

    </footer>
  );
}
