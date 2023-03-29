import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

function MyImage() {
  return (
    <div >
      <Image src="/article2.jpg" alt="My Image" fluid  rounded style={{ border: '1px solid #ccc' }} />
    </div>
  );
}

export default MyImage;