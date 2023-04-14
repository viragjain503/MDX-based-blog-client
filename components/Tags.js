import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Link from "next/link";

function Tags() {
  const [tags, setTags] = useState(null);
  const [isLoadingTags, setIsLoadingTags] = useState(true);

  const gradient = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    color: "white",
    borderRadius: 30,
    margin: "10px",
  };

  useEffect(() => {
    fetch("http://localhost:5000/tags")
      .then((response) => response.json())
      .then((tags) => {
        setTags(tags);
        setIsLoadingTags(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (isLoadingTags) {
    return <Loading />;
  }

  return (
    <>
      {tags.map((tag) => {
        return (
          <Link href={"/tags/" + tag.name} key={tag.name}>
            <Button style={gradient} >
              {tag.name}
            </Button>
          </Link>
        );
      })}
    </>
  );
}

export default Tags;
