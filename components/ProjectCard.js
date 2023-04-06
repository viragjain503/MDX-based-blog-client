import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { ButtonGroup, Row } from "react-bootstrap";
import LogoImage from "./LogoImage";
import { useState } from "react";

function ProjectCard() {

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
    <div style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#" style={linkStyle}>Card Link</Card.Link>
        <Card.Link href="#" style={linkStyle}>Another Link</Card.Link>
      </Card.Body>
      <Card.Footer className="text-muted">
        <ButtonGroup className="w-100">
          <Button variant="link">
            <LogoImage name="react" height={30} width={30}/>
          </Button>
          <Button variant="link">
            <LogoImage name="node"  height={30} width={30} />
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
    </div>
  );
}

export default ProjectCard;