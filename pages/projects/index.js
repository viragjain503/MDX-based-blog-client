import ProjectCard from "@/components/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
       <Container className="p-2">
        <Row className="justify-content-center p-2">
          <Col lg={4} className=" justify-content-center text-center p-2">
            <ProjectCard />
          </Col>
          <Col lg={4} className="text-center p-2">
            <ProjectCard />
          </Col>
          <Col lg={4} className="text-center p-2">
            <ProjectCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}
