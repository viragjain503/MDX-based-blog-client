import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Tags() {
  return (
    <>
    
    <Button variant="light" style={{"margin" : "10px"}}>
      Profile <Badge bg="secondary">9</Badge>
    </Button>
    <Button variant="light" style={{"margin" : "10px"}}>
      Computer  <Badge bg="secondary">9</Badge>
    </Button>
    <Button variant="light" style={{"margin" : "10px"}}>
      Artificial Intelligence <Badge bg="secondary">9</Badge>
    </Button>
    <Button variant="light" style={{"margin" : "10px"}}>
        Intelligence <Badge bg="secondary">9</Badge>
    </Button>
    </>
    
  );
}

export default Tags;