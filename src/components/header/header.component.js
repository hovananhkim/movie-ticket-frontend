import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";
import { Input } from "antd";
import "antd/dist/antd.min.css";

export default function HeaderComponent() {
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  return (
    <div>
      <Container>
        <Row className="headerController">
          <Col xs={4}>
            <img
              src="https://www.galaxycine.vn/website/images/galaxy-logo.png"
              alt="Galaxy cinema"
              className="logo"
            />
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
                  <a href="/a">Đăng nhập</a>
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
              <a href="/a" className="textWhite">
                MUA VÉ
              </a>
            </Col>
            <Col>
              <a href="/a" className="textWhite">
                PHIM
              </a>
            </Col>
            <Col>
              <a href="/a" className="textWhite">
                LICH CHIẾU
              </a>
            </Col>
            <Col>
              <a href="/a" className="textWhite">
                RẠP/ GIÁ VÉ
              </a>
            </Col>
            <Col>
              <a href="/a" className="textWhite">
                LỊCH SỬ MUA HÀNG
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
