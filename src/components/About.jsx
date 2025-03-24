import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about clearfix" id="About">
      <div className="section-center">
        <div className="about-img">
          <div className="about-picture-container">
            <img className="about-picture"
              src="https://img.freepik.com/free-photo/people-enjoying-mexican-barbecue_23-2151000286.jpg?uid=R187588964&ga=GA1.1.1090711853.1739655809&semt=ais_hybrid"
              alt=""
            />
          </div>
        </div>
        <div className="about-info">
          <div className="section-title">
            <h3>About Us</h3>
            <h2>Foodie</h2>
          </div>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quidem aspernatur exercitationem, consequuntur aliquam
            architecto deserunt ipsum alias mollitia ipsa?
          </p>
          <p className="about-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet et
            at dicta architecto quia, ratione tenetur illo voluptatum, deleniti
            harum similique! Dolorem non nam dolorum veritatis, aliquid
            reprehenderit rerum error. Eligendi aspernatur praesentium molestias
            aperiam.
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
