import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import MyList from './MyList';

function TopArticles() {
  return (
    <MyList nodate={true} articles={"top"}/>
  );
}

export default TopArticles;