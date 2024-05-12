import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import { ProjectCard } from "./ProjectCard.js";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import extensionProject from '../assessts/chromeExt.jpg'
import carehalo_logo from '../assessts/careHalo.jpg'

const project1 =  "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=360 360w, https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=400 400w, https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=450 450w, https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=576 576w, https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=768 768w";
const project2 =  "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=360 360w, https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=400 400w, https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=450 450w, https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=576 576w, https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=768 768w";
const project3 =  "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=360 360w, https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=400 400w, https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=450 450w, https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=576 576w, https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?w=768 768w";
// import project2 from "../assessts/project2.jpg";
// import project3 from "../assessts/project3.jpg";

// import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {

  const projects = [
    {
      title: "Chrome Extension",
      description: "Chrome Extension",
      imgUrl: extensionProject,
      link:'https://github.com/Rutuja1104/BrowserExtension.git'
    },
    {
      title: "Charhalo",
      description: "Health Care project",
      imgUrl: carehalo_logo,
      link:'#'

    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: project3,
    // },
  ];

  return (
    <section className="projectContainer p-4" id="projects">
      <Container>
        <Row className="about-container">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="text-center text-decoration-underline mb-4">Projects</h2>
                <Row className="d-flex justify-content-around">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Projects