import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";

function IndividualListItem(props) {
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
          <p>{props.item.published}</p>
        </ListGroup.Item>
    </>
  );
}

export default IndividualListItem;
