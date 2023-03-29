import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleCard from "../components/ArticleCard";
import MyImage from "../components/MyImage";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";
function ArticleComponent() {
  return (
    <>
      <Row className="p-2">
        <Col lg={3} xs={12} md={6} className="p-2">
          <MyImage />
        </Col>
        <Col lg={9} xs={12} md={6} className="p-2">
          <Card>
            <Card.Header>
              <Row className="justify-content-between">
                <Col>
                  <h5>My Title</h5>
                </Col>
                <Col xs="auto">
                  <Badge variant="secondary">March 29, 2023</Badge>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ArticleComponent;
