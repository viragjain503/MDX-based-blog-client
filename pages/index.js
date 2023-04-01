import IntroCard from "@/components/IntroCard";
import MyList from "@/components/MyList";
import ProjectCard from "@/components/ProjectCard";
import RoundedImage from "@/components/RoundedImage";
import { Container, Row, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
    {/* Intro Container */}
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} className="text-center">
            <RoundedImage />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <TypeAnimation
              sequence={[
                "Hello World👋", // Types 'One'
                3000, // Waits 1s
                "Virag Jain🧑‍💻", // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                "I work at Oracle",
                3000,
                "......", // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "3em",
                display: "inline-block",
                color: "#183545",
                fontFamily: "Georgia",
              }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={12} className="text-center">
            <IntroCard />
          </Col>
        </Row>
      </Container>
      {/* Latest Articles */}
      <Container >
        <Row style={{ "margin": 50 }} className="justify-content-center">
          <Col lg={6} className="text-center">
            <h1
              style={{
                fontSize: "3em",
                display: "inline-block",
                color: "#183545",
                fontFamily: "Georgia",
              }}
            >
              Latest Articles
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={12} className="text-center">
            <MyList />
          </Col>
        </Row>
      </Container>
      {/* Projects */}
      <Container >
        <Row style={{ "margin": 50 }} className="justify-content-center">
          <Col lg={6} className="text-center">
            <h1
              style={{
                fontSize: "3em",
                display: "inline-block",
                color: "#183545",
                fontFamily: "Georgia",
              }}
            >
              Projects
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={4} className="text-center">
            <ProjectCard />
          </Col>
          <Col lg={4} className="text-center">
            <ProjectCard />
          </Col>
          <Col lg={4} className="text-center">
            <ProjectCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}
