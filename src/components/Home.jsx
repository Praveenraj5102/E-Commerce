import React from "react";
import "./Home.css";
import Navbar from "./Navbar.jsx";
import Features from "./Features.jsx";
import About from "./About.jsx";
import OurProducts from "./OurProducts.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="banner">
          <h2>Discover the Secreat To Taset</h2>
          <h1>Food on Your Home</h1>
          <a href="#" className="btn banner-btn">
            View More
          </a>
        </div>
      </div>
      <div className="content-divider"></div>
      <Features />
      <About />
      <OurProducts/>
      <Services/>
      <Contact/>
      <Footer/>
      
    </div>
  );
};

export default Home;
