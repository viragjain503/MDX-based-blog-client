// components/layout.js
import Navbar from "./Navbar";
// import Footer from './footer'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "../components/MyCard";
import TopArticles from "./TopArticles";
import Tags from "./Tags";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container className="p-2">
        <Row className="p-2">
          <Col lg={9} className="p-2">
            <main>{children}</main>
          </Col>
          <Col lg={3} className="p-2">
            <MyCard />
            <Row className="justify-content-center">
              <Col className="text-center" style={{ marginTop: "25px" }}>
                <h4
                  style={{
                    display: "inline-block",
                    color: "#183545",
                    fontFamily: "Georgia",
                  }}
                >
                  Top Articles
                </h4>
              </Col>
            </Row>
            <TopArticles />
            <Row className="justify-content-center">
              <Col className="text-center" style={{ marginTop: "25px" }}>
                <h4
                  style={{
                    display: "inline-block",
                    color: "#183545",
                    fontFamily: "Georgia",
                  }}
                >
                  Tags
                </h4>
              </Col>
            </Row>
            <Tags />
          </Col>
        </Row>
      </Container>

      {/* <Footer /> */}
    </>
  );
}
