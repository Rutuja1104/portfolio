import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4} className="p-4">
      <div className="proj-imgbx w-100%" >
       <img src={imgUrl} style={{ width: "100%",height: '230px'}} />
        <div className="proj-txtx">
        <a href={link}><span>{title}</span></a>
        </div>
      </div>
      <div className="text-center projectDescriptions"><a href={link} className="text-dark">{description}</a></div>
    </Col>
  )
}
