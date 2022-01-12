import React from "react";
import {movies, cinemas} from "../../mockdata/movies";
import { List, Tabs } from "antd";
import { Col, Row } from "react-bootstrap";
const { TabPane } = Tabs;

export default function MovieScheduleComponent(props) {
  const callback = (key) => {};
  const list = (isMovie = true) => {
    return (
      <div>
        <Row>
          { isMovie && <Col>
            <List
              header={<div>CHỌP PHIM</div>}
              bordered
              dataSource={movies}
              renderItem={(item) => <List.Item>{item.englishName}</List.Item>}
            />
          </Col>}
          <Col>
            <List
              header={<div>CHỌP RẠP</div>}
              bordered
              dataSource={cinemas}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Col>
          { !isMovie && <Col>
            <List
              header={<div>CHỌP PHIM</div>}
              bordered
              dataSource={movies}
              renderItem={(item) => <List.Item>{item.englishName}</List.Item>}
            />
          </Col>}
          <Col>
            <List header={<div>CHỌP SUẤT</div>} bordered />
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
