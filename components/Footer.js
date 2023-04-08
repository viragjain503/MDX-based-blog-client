import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center" style={{ marginTop: "25px" }}>
            <a href="https://twitter.com/">
              <FaTwitter />
            </a>
          </Col>
          <Col className="text-center" style={{ marginTop: "25px" }}>
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
          </Col>
          <Col className="text-center" style={{ marginTop: "25px" }}>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
