import React , { useState } from "react";
import "./Navbar.css";
import { GoSearch } from "react-icons/go";
import { Link } from 'react-router-dom'; 
import logo from "../../../public/Images/logo.png";
import Button from "../UI/Button";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {

const [Toggle , setToggle ] = useState(false);

const handleClick = () => {
  setToggle(!Toggle);
}
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
          <h2>Ddsgnr</h2>
        </div>
        <div className = "box">
          <nav className = {Toggle ? "menubar active" : "menubar"}>
            <ul className="nav-links">
                <li>
                <Link to = "/" className="links" onClick={handleClick}> Home </Link>
                </li>
                <li>
                    <Link to = "/About" className="links" onClick={handleClick}> About Us </Link>
                </li>
                <li>
                    <Link to = "/Menu" className="links" onClick={handleClick}> Menu </Link>
                </li>
                <li>
                    <Link to ="/Contact" className="links" onClick={handleClick}> Contact Us </Link>
                </li>
                <li>
                    <Link to = "/Achievement" className="links" onClick={handleClick}> Achievements </Link>
                </li>
            </ul>
          </nav>
          <div className="btns">
            <form action="">
              <input type="search" name="" id="" placeholder="Search" />
              <GoSearch />
            </form>
            <Button type = "submit" color = "black"> Book a table</Button>
          </div>
        </div>
        <div className="toggle" onClick={handleClick} >
          {Toggle ? <IoMdClose /> : <FaBars />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
