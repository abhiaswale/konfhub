import React from "react";
import KonfhubLogo from "../assets/konfhub-logo.jpg";
import Octopus from "../assets/Octopus1.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="company-logo">
        <img src={KonfhubLogo} alt="konfhublogo"></img>
      </div>
      <div className="event">
        <div className="event-frame">
          <section className="event-content-data">
            <div className="event-header">
              <h1>EVENTS</h1>
            </div>
            <p className="event-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra
            </p>
          </section>
          <div className="company-image">
            <img src={Octopus} alt="companylogo"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
