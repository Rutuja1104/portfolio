import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaUserGraduate } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { SiOnlyoffice } from "react-icons/si";

const About = () => {
  return (
    <div className="AboutDataContainer justify-content-around">
      <h1 className="text-center text-decoration-underline mb-4">About Me</h1>

      <Row className="p-4 mb-4">
        <Col className="p-4">
          <div className="about-container p-4 ">
            <h1>ABOUT </h1>
            <p className="mt-4 pt-4 mb-4" style={{ fontSize: "18px" }}>
              I am an experienced Software Engineer currently employed at
              Thinkitive Technologies Private Limited in Pune. My expertise
              spans both Front-end and Back-end web technologies, with a primary
              focus on React.js for developing modules tailored to client
              requirements. In particular, I have extensive experience in the
              healthcare software domain.
            </p>
            <p className=" pt-4 mb-4" style={{ fontSize: "18px" }}>
              One notable project in my portfolio is the development of the
              InsiteFlow Browser Extension. Leveraging React.js, Webpack, and
              WebSocket connections, I enhanced clinical decision support within
              Electronic Health Records (EHR) web applications. My key
              achievements include integrating InsiteFlow's workflow
              interoperability container for seamless communication between EHR
              web applications and clinical decision support systems. I
              implemented real-time data exchange through WebSocket connections,
              efficient data management using React.js, and error tracking using
              Sentry.
            </p>
            <p className="pt-4 mb-4" style={{ fontSize: "18px" }}>
              In another project, CareHalo, I utilized React.js, Webpack, and
              WebSocket connections to enhance clinical decision support within
              EHR web applications. My responsibilities included developing and
              maintaining web applications, ensuring high performance and
              responsiveness. I collaborated with cross-functional teams to
              analyze project requirements and translated them into technical
              specifications. Additionally, I have a strong proficiency in
              JavaScript and integrating REST APIs.
            </p>
            <p className="pt-4" style={{ fontSize: "18px" }}>
              Overall, my skill set includes React.js for building responsive
              and dynamic user interfaces, WebSocket for real-time
              communication, Webpack for project bundling and optimization, and
              proficiency in JavaScript for implementing key functionalities. I
              am experienced in handling local storage data and extracting
              cookie values for seamless data management. My work reflects a
              commitment to delivering high-quality software solutions in the
              healthcare domain.
            </p>
          </div>
        </Col>
        <Col className="p-4 m-0">
          <Row className="mb-4 p-4 Data-container ">
            <Col className="text-center">
              <span style={{ fontSize: "7rem" }}>
                <SiOnlyoffice />
              </span>
            </Col>
            <Col className="Data-container">
              <h1>Experience</h1>
              <h3>Thinkitive Technologies Software Engineer E2</h3>

              <p>
                Oct 2023 - Present (1 yr 8 mos) Pune, Maharashtra, Proficient in
                building dynamic and responsive web applications using React.js.
                Experienced in establishing and managing WebSocket connections,
                enhancing real-time communication features in applications.
                Well-versed in Webpack for efficient bundling and asset
                management. Utilize Sentry for proactive error tracking,
                ensuring seamless user experiences. Expertise in developing
                Chrome extensions to enhance browser functionalities.
              </p>
            </Col>
          </Row>
          <Row className="mb-4 p-4 Data-container">
            {/* <Col><FaUserGraduate /></Col> */}
            <Col className="text-center">
              <span className="" style={{ fontSize: "7rem" }}>
                <FaUserGraduate />
              </span>
            </Col>
            <Col className="Data-container">
              <h1>Education</h1>
              <p>
                Graduated with a B.E in Computer Science from Jagadambha College
                of Engineering & Technology, achieving a CGPA of 8.6 in 2022.
                Prior academic achievements include a HSC from Maharashtra State
                Board with 65.69% in 2018 and SSC with 72.400% in 2016.
              </p>
            </Col>
          </Row>
          <Row className="p-4 Data-container">
            <Col className="text-center">
              <span className="" style={{ fontSize: "7rem" }}>
                <GiStairsGoal />
              </span>
            </Col>
            <Col className="Data-container">
              <h1>Future Goals</h1>
              <p>
                I'm a passionate software engineer with a strong foundation in
                React development. While I'm constantly honing my skills in
                crafting user-friendly and interactive UIs, I'm also eager to
                expand my knowledge into building large-scale systems and
                mastering backend frameworks. My ultimate goal is to become a
                well-rounded full-stack developer who can contribute to complex,
                impactful projects. Committed to innovation and continuous
                learning for creating seamless web experiences.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default About;
