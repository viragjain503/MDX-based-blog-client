import ReactLoading from 'react-loading';
import { Row } from 'react-bootstrap';

export default function Loading() {
  return (
    <Row className='justify-content-center'>
        <ReactLoading  color='#183545'/>
      </Row >
  );
}
