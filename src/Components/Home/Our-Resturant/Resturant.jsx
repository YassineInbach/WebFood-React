import React from "react";
import img from "../../../../public/Images/Image.png"
import './Resturant.css';
import image from "../../../../public/Images/Image-1.png"
import Button from "../../UI/Button";

const Resturant = () =>{
    return (
        <section className="resturant">
            <div className="container-resturant">
                <div className="content">
                    <h2>Welcome to Our Resturant</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <div className="btns">
                        <Button type = "submit" color = "white">Book a table</Button>
                    </div>
                </div>
                <img src={ img } alt="" />
            </div>
            <div className="container-resturant">
            <img src={ image } alt="" />
                <div className="content">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <div className="btns">
                    <Button type = "submit" color = "white">Book a table</Button>                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resturant;