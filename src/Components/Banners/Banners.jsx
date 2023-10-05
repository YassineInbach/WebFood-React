import React, { useState } from "react";
import "./Banners.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Banners = () => {
    const [Show, setShow] = useState(false);
    return (
        <>
            <div className="banner">
                <div className="outlinePlus">
                    <h2>Welcome</h2>
                    <button
                        onClick={() => {
                            setShow(!Show);
                        }}
                    >
                        {Show ? <FaAngleDown id="icon" /> : <FaAngleUp id="icon" />}
                    </button>
                </div>
                    <div className = {Show ? "container active" : "container"}>
                        <div className="content">
                            <p>Email:info@ddsgnr.com</p>
                            <div className="line"></div>
                            <p>Phone Number: 956 742 455 678</p>
                            <div className="line"></div>
                            <p>Opening Hours</p>
                            <div className="line"></div>
                            <p>Monday - Friday</p>
                            <p>8:00am to 9:00pm</p>
                            <div className="line"></div>
                            <p>Saturday - Sunday</p>
                            <p>8:00am to 4:00pm</p>
                        </div>
                        <div className="icons">
                            <a href="">
                                {" "}
                                <BsFacebook className="icon" />
                            </a>
                            <a href="">
                                <AiFillInstagram href="" className="icon" />
                            </a>
                            <a href="">
                                <FaTwitter className="icon" />
                            </a>
                            <a href="">
                                <AiFillLinkedin className="icon" />
                            </a>
                        </div>
                    </div>
            </div>
        </>
    );
};
export default Banners;
