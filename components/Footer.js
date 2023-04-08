import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row className="justify-content-center p-4">
          <Col lg={2} className="text-center">
            <SocialIcon url="https://twitter.com/viragjain503" />
          </Col>
          <Col lg={2} className="text-center">
            <SocialIcon url="https://www.instagram.com/viragjain503/" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
