import React, { useState, useEffect } from 'react';
import Loading from "./Loading";
import IndividualListItem from "./IndividualListItem";
import ListGroup from "react-bootstrap/ListGroup";

function MyList(props) {
  const [articles, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch(`http://localhost:5000/article/${props.articles}`)
      .then(response => response.json())
      .then(articles => {
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
            <IndividualListItem item={article} nodate={props.nodate} key={article._id}/>
          )
        })
      }
    </ListGroup>
    </>
  );
}

export default MyList;
