import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
// const inter = Inter({ subsets: ["latin"] });
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "../components/MyCard";

export default function Home() {
  return (
    <>
      <Container className="p-2" >
        <Row className="p-2">
          <Col lg={8} className="p-2">
            <MyCard/>          
          </Col>
          <Col lg={4} className="p-2">
            <MyCard/>
          </Col>
          <Col lg={8} className="p-2">
          </Col>
          <Col lg={4} className="p-2">
            <MyCard/>
          </Col>
        </Row>

      </Container>
    </>
  );
}
