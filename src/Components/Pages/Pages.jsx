import React from "react";
import Banners from "../Banners/Banners";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Achievement from "../Achievement/Achievement";
import Footer from "../Footer/Footer";
const Pages = () => {
  return (
    <>
    <BrowserRouter>
      <Banners />
        <Navbar />
        <Routes>
          <Route  path='/' element={<Home />} exact />
          <Route  path='/About' element = {<About />} exact />
          <Route  path='/Menu' element = {<Menu />} exact />
          <Route  path='/Contact' element = {<Contact />} exact />
          <Route  path='/Achievement' element = {<Achievement />} exact />
        </Routes>
        <Footer />
    </BrowserRouter>
   

    </>
  );
};
export default Pages;
