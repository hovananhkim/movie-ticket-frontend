import React from "react";
import { movies, cinemas } from "../../mockdata/movies";
import { List, Tabs } from "antd";
import { Col, Row } from "react-bootstrap";
const { TabPane } = Tabs;

export default function SelectTicketComponent(props) {
  const callback = (key) => {};
  const show = (value) => {
    console.log(value);
  };
  const ListMovies = () => {
    return (
      <List
        header={<div>CHỌN PHIM</div>}
        bordered
        dataSource={movies}
        renderItem={(item) => (
          <List.Item
            className="cursor-pointer"
            onClick={show(item.englishName)}
          >
            {item.englishName}
          </List.Item>
        )}
      />
    );
  };
  const ListCinemas = () => {
    return (
      <List
        header={<div>CHỌN RẠP</div>}
        bordered
        dataSource={cinemas}
        renderItem={(item) => (
          <List.Item className="cursor-pointer" onClick={show(item)}>
            {item.name}
          </List.Item>
        )}
      />
    );
  };
  const list = (isMovie = true) => {
    return (
      <div>
        <Row>
          {isMovie && (
            <Col>
              <ListMovies />
            </Col>
          )}
          <Col>
            <ListCinemas />
          </Col>
          {!isMovie && (
            <Col>
              <ListMovies />
            </Col>
          )}
          <Col>
            <List header={<div>CHỌN SUẤT</div>} bordered />
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <div className="container m-auto list-movies">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Theo phim" key="1">
          {list()}
        </TabPane>
        <TabPane tab="Theo rạp" key="2">
          {list(false)}
        </TabPane>
      </Tabs>
    </div>
  );
}
