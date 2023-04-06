import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ButtonGroup, Row } from "react-bootstrap";
import LogoImage from "./LogoImage";
import Link from 'next/link';

function IntroCard() {
  const gradient = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    color: "white",
    padding: "1rem",
    borderRadius: 30,
  };

  return (
    <Card className="text-center">
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body>
        <Card.Title>🌱 Welcome to my digital garden. 🌱</Card.Title>
        <Card.Text>
          I'm a software developer in Mumbai. I make open-source projects and
          write about code, design, and life. I like Chess,Cricket and Table
          Tennis.
        </Card.Text>
        <Link href="/career">
          <Button style={gradient}>About Me</Button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">
        <ButtonGroup className="w-100">
          <Button variant="link">
            <LogoImage name="react"  height={40} width={40} />
          </Button>
          <Button variant="link">
            <LogoImage name="node"   height={40} width={40}/>
          </Button>
          <Button variant="link">
            <LogoImage name="java"  height={40} width={40} />
          </Button>
          <Button variant="link">
            <LogoImage name="aws"   height={40} width={40}/>
          </Button>
          <Button variant="link">
            <LogoImage name="python"   height={40} width={40}/>
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
}

export default IntroCard;
