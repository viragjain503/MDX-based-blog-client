// components/layout.js
import Navbar from './Navbar'
// import Footer from './footer'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "../components/MyCard";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container className="p-2" >
        <Row className="p-2">
          <Col lg={9} className="p-2">
            <main>{children}</main>
          </Col>
          <Col lg={3} className="p-2">
            <MyCard/>
          </Col>
        </Row>
      </Container>

      {/* <Footer /> */}
    </>
  )
}