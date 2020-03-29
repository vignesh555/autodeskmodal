import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

import Card from "../../components/Card";
import Title from "../../components/Title";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import "./Documentation.scss";

function Documentation() {
  const [apiList, setApiList] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(loadMoreItems);

  function loadMoreItems() {
    setIsFetching(true);
    setTimeout(async () => {
      const resp = await axios.get("http://localhost:3000/db.json");
      const items = [...apiList, ...resp.data.items];
      setApiList(items);
      setIsFetching(false);
    }, 1000);
  }

  return (
    <div className="App">
      <Title title="Documentation" />
      <div className="content">
        <Container>
          <div className="contentTitle">
            <h4>APIs & Services</h4>
            <p>Access information on how to use Forge APIs and Services</p>
          </div>
        </Container>
        <Container>
          <Row xs={1} md={2} lg={3}>
            {apiList.length > 0 &&
              apiList.map((item, index) => (
                <Col key={`card_${index}`}>
                  <Card item={item} />
                </Col>
              ))}
          </Row>
        </Container>
        <Container className="loaderCenterAlign">
          {isFetching && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </Container>
      </div>
    </div>
  );
}

export default Documentation;
