import "react-bootstrap-typeahead/css/Typeahead.css";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { FcSearch } from "react-icons/fc";
import Button from "react-bootstrap/Button";

function Search() {
  const [singleSelections, setSingleSelections] = useState([]);

  return (
    <>
      <Form className="d-flex">
      <Form.Group className="mb-0 me-2">
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={setSingleSelections}
          options={["virag", "jain"]}
          placeholder="Search for Projects"
          selected={singleSelections}
        />
      </Form.Group>
      <Button variant="outline-secondary">
        <FcSearch />
      </Button>
    </Form>
    </>
  );
}

export default Search;
