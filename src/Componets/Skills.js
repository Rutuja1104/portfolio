import React, { useEffect, useState } from "react";
import AnimatedProgressBar from "./ProgressBar";
import CircularProgressBar from "./CircularProgressBar";
import { Col, FormLabel, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <div className="SkillsContainer justify-content-around">
      <h1 className="text-center text-decoration-underline mb-4">Skills</h1>
      <Row >
        <Col className="progressContainer">
        <h3 className="text-center text-decoration-underline mb-0">
                Technical Skills
              </h3>
          <div class="p-4 justify-content-around" style={{}}>
            <div class="p-2 bd-highlight">
              <h4 className="mb-1">React</h4>
              <AnimatedProgressBar value={80} animationDuration={10} />
            </div>
            <div class="p-2 bd-highlight">
              <h4 className="mb-1">Javascript</h4>
              <AnimatedProgressBar value={70} animationDuration={10} />
            </div>
            <div class="p-2 bd-highlight">
              <h4 className="mb-1">HTML</h4>
              <AnimatedProgressBar value={65} animationDuration={10} />
            </div>
            <div class="p-2 bd-highlight">
              <h4 className="mb-1">CSS</h4>
              <AnimatedProgressBar value={60} animationDuration={10} />
            </div>
            <div class="p-2 bd-highlight">
              <h4 className="mb-1">Bootstrap</h4>
              <AnimatedProgressBar value={55} animationDuration={10} />
            </div>
            <div class="p-2 bd-highlight">
              <h4 className="mb-1">Webpack</h4>
              <AnimatedProgressBar value={65} animationDuration={10} />
            </div>
            <div class="p-2 bd-highlight">
              <h4 className="mb-1">Sentry & Mixpanel</h4>
              <AnimatedProgressBar value={80} animationDuration={10} />
            </div>
            <div class="p-2 bd-highlight">
              <h4 className="mb-1">SQL</h4>
              <AnimatedProgressBar value={50} animationDuration={10} />
            </div>
            <div class="p-2 bd-highlight">
              <h4 className="mb-1">CORE JAVA</h4>
              <AnimatedProgressBar value={40} animationDuration={10} />
            </div>
          </div>
        </Col>
        <Col className="progressContainer">
          <div class="d-flex flex-row bd-highlight mb-3 justify-content-around">
            <Row className="mx-auto">
              <h3 className="text-center text-decoration-underline mb-4">
                Professional Skills
              </h3>
              <Col className="align-items-center" style={{display:'flex', justifyContent:"space-around"}}>
                <div class="p-2 bd-highlight mb-4">
                  <h4 className="mb-4">Creativity</h4>{" "}
                  <CircularProgressBar value={55} animationDuration={10} />
                </div>
                <div class="p-2 bd-highlight mb-4">
                  <h4 className="mb-4">Communications</h4>
                  <CircularProgressBar value={55} animationDuration={10} />
                </div>
              </Col>
              <Col className="align-items-center mb-4" style={{display:'flex', justifyContent:"space-around"}}>
                <div class="p-2 bd-highlight">
                  <h4 className="mb-4">Problem Solving</h4>
                  <CircularProgressBar value={55} animationDuration={10} />
                </div>
                <div class="p-2 bd-highlight mb-4">
                  <h4 className="mb-4">Team Work</h4>
                  <CircularProgressBar value={55} animationDuration={10} />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
