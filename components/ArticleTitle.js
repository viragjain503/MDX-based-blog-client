import { Card, Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ArticleTitle = ({ name, photo, date, tags, views}) => {
  const gradient = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    color: "white",
    borderRadius: 30,
    margin: "10px",
  };

  return (
    <Card className="mb-3">
      <Card.Body className="d-flex justify-content-between align-items-start">
        <div className="d-flex align-items-center">
          <img
            src={photo}
            alt={name}
            width="50"
            height="50"
            className="mr-3 rounded-circle"
          />
          <div className="p-2">
            <h5 className="mb-0">{name}</h5>
            <div>
              {tags.map((tag) => (
                <Badge
                  style={gradient}
                  key={tag._id}
                  variant="secondary"
                  className="m-1"
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="p-2">
          <p className="text-muted mb-0">{date}</p>
          <p className="text-muted mb-0">Views - {views}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ArticleTitle;
