import React from "react";
import Container from "react-bootstrap/Container";

import "./Title.scss";

function Title(props) {
  return (
    <div className="pageTitle">
      <Container>
        <h4>{props.title}</h4>
      </Container>
    </div>
  );
}

export default Title;
