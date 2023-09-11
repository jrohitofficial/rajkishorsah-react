import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> </span>Raj Kishor Sah
            from <span className="purple"> Kathmandu, Nepal.</span>
            <br />I successfully earned a Bachelor of Science (Hons) degree in Computing from Softwarica College of IT and E-commerce, which is affiliated with Coventry University in the United Kingdom. My undergraduate journey took place from 2021 to 2024.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding Bike
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Investigate something new.
            </li>
          </ul>

          <p style={{ color: "#EB5406" }}>
            "Invest Your 1 % A Day To Making World Beautiful!"{" "}
          </p>
          <footer className="blockquote-footer">ROBERT RAJ</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
