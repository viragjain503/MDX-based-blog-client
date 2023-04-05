import React, { useState, useEffect } from 'react';
import Loading from "./Loading";
import IndividualListItem from "./IndividualListItem";
import ListGroup from "react-bootstrap/ListGroup";

function  MyListTags(props) {
  const [articles, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/article/articlesbytag/'+props.tag)
      .then(response => response.json())
      .then(articles => {
        console.log("Here")
        console.log(articles)
        setData(articles);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  return (
    <>
    <ListGroup as="ol" numbered>
      {
        articles.map(article => {
          return(
            <IndividualListItem item={article} key={article}/>
          )
        })
      }
    </ListGroup>
    </>
  );
}

export default MyListTags;
