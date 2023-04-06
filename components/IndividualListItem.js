import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";
import moment from "moment";

function IndividualListItem(props) {
  const formattedDate = moment(props.item.published).format("MMM DD, YYYY");

  if(props.nodate){
    return (
      <>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <Link
                href={"/article/title/" + props.item.url}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="fw-bold">{props.item.title}</div>
              </Link>
            </div>
          </ListGroup.Item>
      </>
    );
  }else{
    return (
      <>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <Link
                href={"/article/title/" + props.item.url}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="fw-bold">{props.item.title}</div>
              </Link>
            </div>
            <p>{formattedDate}</p>
          </ListGroup.Item>
      </>
    );
  }
  
}

export default IndividualListItem;
