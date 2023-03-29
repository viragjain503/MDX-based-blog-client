import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

function MyCard() {
  return (
    <Card>
      <Image src="./article.jpg" alt="Ad Image" fluid />
      <center><p>Advertisement</p></center>
    </Card>
  );
}

export default MyCard;