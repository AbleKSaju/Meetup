import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function listMeetup({ list }) {
  const cardStyle = {
    float: "left",
    marginRight: "10px",
    width: "18rem",
  };
  const accessFavorate = () => {
    console.log("hi");
  };
  return (
    <>
      <Card style={cardStyle} key={list.id}>
        <Card.Img variant="top" src={list.Image} />
        <Card.Body>
          <Card.Title>{list.title}</Card.Title>
          <Card.Text>
            {list.description}
            <br />
            {list.address}
          </Card.Text>
          <Button variant="primary" onClick={accessFavorate}>
            To favorates
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default listMeetup;
