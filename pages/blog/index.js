import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
// const inter = Inter({ subsets: ["latin"] });
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "../../components/MyCard";
import MyPagination from "../../components/MyPagination";

export default function Blog() {
  return (
    <>
      <Container className="p-2" >
        <Row className="p-2">
          <Col lg={4} xs={12} md={6} className="p-2">
            <MyCard />
          </Col>
          <Col lg={4} xs={12} md={6} className="p-2">
            <MyCard />
          </Col>
          <Col lg={4} xs={12} md={6} className="p-2">
            <MyCard />
          </Col>
          <Col lg={4} xs={12} md={6} className="p-2">
            <MyCard />
          </Col>
          <Col lg={4} xs={12} md={6} className="p-2">
            <MyCard />
          </Col>
          <Col lg={4} xs={12} md={6} className="p-2">
            <MyCard />
          </Col>
        </Row>
        <Row className="justify-content-center">
        <Col lg={6} className="text-center">
          <MyPagination />
        </Col>
      </Row>
      </Container>
    </>
  );
}
