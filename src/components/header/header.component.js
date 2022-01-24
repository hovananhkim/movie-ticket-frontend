import React, { useState } from "react";

import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";
import { Input } from "antd";
import "antd/dist/antd.min.css";
import LoginComponent from "./modal/login/login.component";

export default function HeaderComponent() {
  const onSearch = (value) => console.log(value);
  const { Search } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Container>
        <Row className="headerController">
          <Col xs={4}>
            <a href="/">
              <img
                src={window.location.origin + "/movie-ticket.png"}
                alt="Galaxy cinema"
                className="logo"
              />
            </a>
          </Col>
          <Col xs={8} className="equalLogo">
            <Row>
              <Col xs={6}>
                <div className="headerSearch">
                  <Search onSearch={onSearch} style={{ width: 250 }} />
                </div>
              </Col>
              <Col xs={6}>
                <div className="headerAuth">
                  <div className="loginLink" onClick={showModal}>
                    Đăng nhập
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="menuBackgroundColor">
        <Container className="menuPadding">
          <Row
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 15 }}
          >
            <Col>
              <a className="headerItem" href="/lich-chieu">
                MUA VÉ
              </a>
            </Col>
            <Col>
              <a className="headerItem" href="/a">
                PHIM
              </a>
            </Col>
            <Col>
              <a className="headerItem" href="/a">
                GÓC ĐIỆN ẢNH
              </a>
            </Col>
            <Col>
              <a className="headerItem" href="/a">
                RẠP/ GIÁ VÉ
              </a>
            </Col>
            <Col>
              <a className="headerItem" href="/a">
                LỊCH SỬ MUA HÀNG
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <LoginComponent
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        showModal={showModal}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </div>
  );
}
