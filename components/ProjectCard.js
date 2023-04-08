import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { ButtonGroup, Row } from "react-bootstrap";
import LogoImage from "./LogoImage";
import { useState } from "react";

function ProjectCard(props) {
 
  const gradient = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    color: "white",
    borderRadius: 30,
    margin: "10px",
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    backgroundColor: isHovered ? "#e0e0e0" : "#f5f5f5",
    transition: "background-color 0.3s ease",
    padding: "1rem",
    borderRadius: "0.5rem",
  };

  const linkStyle = {
    margin: "0.5rem",
    color: "#007bff",
    textDecoration: "none",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card>
        <Card.Body>
          <Card.Title>{props.project.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.project.subtitle}
          </Card.Subtitle>
          <Card.Text>{props.project.detail}</Card.Text>
          <Card.Link
            href={props.project.github}
            target="_blank"
            style={linkStyle}
          >
            <LogoImage name="github" height={30} width={30} />
          </Card.Link>
        </Card.Body>
        <Card.Footer className="text-muted">
            {
              props.project.tags.map(tag => {
                return (
                <Badge
                style={gradient}
                variant="secondary"
                className="m-1"
              >
                {tag}
              </Badge>)
              })
            }
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ProjectCard;
