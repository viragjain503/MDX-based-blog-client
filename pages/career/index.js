// import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
// const inter = Inter({ subsets: ["latin"] });
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleCard from "../../components/ArticleCard";
// import MyPagination from "../../components/MyPagination";
import MyImage from "@/components/MyImage";
import { Image } from 'react-bootstrap';
import ArticleComponent from "@/components/ArticleComponent";
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
