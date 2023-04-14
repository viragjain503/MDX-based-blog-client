import ProjectCard from "@/components/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
const projects = require('../../projects.json');

export default function Home() {
  return (
    <>
       <Container className="p-2">
        <Row className="justify-content-center p-2">
        {
             projects.map(project => {
              return(
                <Col lg={4} className="text-center p-1">
                  <ProjectCard project={project} key={project.title}/>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </>
  );
}
