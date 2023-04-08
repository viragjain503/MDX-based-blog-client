import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import MyTimeline from "@/components/MyTimeline";

export default function Career() {
  return (
    <>
      <Container className="p-2">
          <MyTimeline/>
      </Container>
    </>
  );
}
