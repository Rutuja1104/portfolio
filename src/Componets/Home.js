import React from "react";
import { TypeAnimation } from "react-type-animation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../assessts/pic.jpg";
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Skills from "./Skills";
import Projects from "./Projects";
import './Home.css'
import About from "./About";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
        <Row className="HomeContainer mt-2 p-4">
      <Col className="DataContainer p-4">
        <h1 className="mt-5">
          Hello, My name is <span className="tittleName">Rutuja Sahare</span>
        </h1>
        <TypeAnimation
          sequence={[
            "I'm a Software Enginner",
            1000,
            "I'm a  React Developer",
            1000,
            "I'm a  Web Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" , marginBottom:""}}
          repeat={Infinity}
        />
        <p className="mt-4 pt-4" style={{fontSize:"20px"}}>
          Hey there! I'm a Web Developer with over a year of hands-on
          experience, specializing in React.js development. Crafting elegant and
          responsive web applications is my forte. Proficient in React, Webpack,
          and other modern technologies, I'm dedicated to creating seamless user
          interfaces and delivering top-notch code.
        </p>
        <div className="d-flex justify-content-between mt-5 p-4">
        <a className="social-media text-dark" href="https://www.linkedin.com/in/rutujasahare/">
        <FaLinkedinIn />
      </a>
      <a className="social-media text-dark" href="https://github.com/Rutuja1104">
        <FaGithub />
      </a>
      <a className="social-media text-dark" href="rutujasahare2018@gmail.com">
        <SiGmail />
      </a>
      </div>
      </Col>
      <Col className="DataContainer p-4">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img className="d-flex picImg justify-content-center" src={pic} />
      </Col>
    </Row>
    <Skills/>
    <Projects/>
    <About/>
    <Contact/>
    </>
  );
};

export default Home;
