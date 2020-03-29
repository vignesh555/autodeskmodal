import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";  
import { FaChevronRight } from 'react-icons/fa';

import "./Card.scss"

function CardLayout(props) {
  const { item } = props;
  return (
    <Card className="cardContainer">
      <Card.Body>
        <Card.Title><Image alt={item.title} src={item.image.source} />{item.title}</Card.Title>
        <Card.Text className="cardText">{item.body}</Card.Text>

        <a href={`/developer/en/api/${item.title}/intro`} className="boderBottom linkWidth">Intro<FaChevronRight className="icon" /></a>
        <a href={`/developer/en/api/${item.title}/guide`} className="boderBottom linkWidth">Developer's guide<FaChevronRight className="icon" /></a>
        <a href={`/developer/en/api/${item.title}/reference`} className="linkWidth">API reference<FaChevronRight className="icon" /></a>
      </Card.Body>
    </Card>
  );
}

export default CardLayout;
