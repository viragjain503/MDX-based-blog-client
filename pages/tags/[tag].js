import MyListTags from "@/components/MyListTags";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function Tags() {
  const gradient = {
    background: "linear-gradient(45deg, #FE7B8B 30%, #FF8E53 90%)",
    border: 0,
    color: "white",
    borderRadius: 30,
    margin: "10px",
  };

  const router = useRouter();
  const tag = router.query.tag;
  return (
    <>
      <Row className="justify-content-center">
        <Col lg={3} className="text-center">
          <Button style={gradient}>{tag}</Button>
        </Col>
      </Row>

      <MyListTags tag={tag} />
    </>
  );
}

export default Tags;
