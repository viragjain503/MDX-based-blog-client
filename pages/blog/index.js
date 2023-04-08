import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import MyList from "@/components/MyList";

export default function Blog() {
  return (
    <>
      <Container>
        <Row style={{ margin: 30 }} className="justify-content-center">
          <Col lg={6} className="text-center">
            <h1
              style={{
                fontSize: "2em",
                display: "inline-block",
                color: "#183545",
                fontFamily: "Georgia",
              }}
            >
              All Articles
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={12} className="text-center">
            <MyList nodate={false} articles={"all"} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
