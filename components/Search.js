import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

function Search(){
    const [singleSelections, setSingleSelections] = useState([]);
    const [multiSelections, setMultiSelections] = useState([]);
  
    return (
      <>
        <Form.Group>
          {/* <Form.Label>Single Selection</Form.Label> */}
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            onChange={setSingleSelections}
            options={["virag","jain"]}
            placeholder="Search for Projects"
            selected={singleSelections}
          />
        </Form.Group>
        {/* <Form.Group style={{ marginTop: '20px' }}>
          <Form.Label>Multiple Selections</Form.Label>
          <Typeahead
            id="basic-typeahead-multiple"
            labelKey="name"
            multiple
            onChange={setMultiSelections}
            options={["virag","jain"]}
            placeholder="Choose several states..."
            selected={multiSelections}
          />
        </Form.Group> */}
      </>
    );
  };

  export default Search;