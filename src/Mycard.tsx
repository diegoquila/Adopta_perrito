// MyCard.jsx
import React from "react";
import Tags from "./Tags";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';


const MyCard = ({ image, name, description, tags }) => {
  return (
    <Col xs={12} md={6} xl={3}>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tags text={tags.text} color={tags.color} />
      </Card.Body>
    </Card>
    </Col>
  );
};

export default MyCard;
