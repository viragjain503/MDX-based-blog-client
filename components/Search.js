import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { FcSearch } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import slugify from 'react-slugify';

function Search() {
  const [data, setData] = useState([]);
  const [singleSelections, setSingleSelections] = useState([]);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/article/titles");
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  const handleSearch = () => {
    const inputValue = slugify(singleSelections[0]);
    setSearchText(inputValue);
    router.push(`/article/title/${inputValue}`);
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Form className="d-flex">
        <Form.Group className="mb-0 me-2">
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            onChange={setSingleSelections}
            options={data}
            placeholder="Search for Projects"
            selected={singleSelections}
          />
        </Form.Group>
        <Button variant="outline-secondary" onClick={handleSearch}>
          <FcSearch />
        </Button>
      </Form>
      {/* {searchText && (
        <Link href={`/article/title/${searchText}`}>
          <a>Go to search results</a>
        </Link>
      )} */}
    </>
  );
}

export default Search;
