import React, { useState, useEffect } from "react";
import MyListTags from "@/components/MyListTags";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "../../components/Loading";
import ListGroup from "react-bootstrap/ListGroup";
import IndividualListItem from "../../components/IndividualListItem";
function Tags() {

  const [articles, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const { tag } = router.query;

  // console.log("Router: " ,router.query.tag)

  const gradient = {
    background: "linear-gradient(45deg, #FE7B8B 30%, #FF8E53 90%)",
    border: 0,
    color: "white",
    borderRadius: 30,
    margin: "10px",
  };

  useEffect(() => {
    if(tag){
      fetch(`http://localhost:5000/article/articlesbytag/${tag}`)
      .then((response) => {
        console.log("Response here")
        console.log(response);
        return response.json();
      })
      .then((articles) => {
        setData(articles);
        console.log("Articles Here");
        console.log(articles);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
    }
  }, [tag]);


  
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>

      <Row className="justify-content-center">
        <Col lg={3} className="text-center">
          <Button style={gradient}>{tag}</Button>
        </Col>
      </Row>

      <ListGroup as="ol" numbered>
        {articles && articles.map((article) => {
          return <IndividualListItem item={article} key={article} />;
        })}
      </ListGroup>
    </>
  );
}

export default Tags;
