import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import "antd/dist/antd.min.css";
import { Modal, Button } from "antd";
import { Tabs } from "antd";
const { TabPane } = Tabs;

export default function LoginComponent(props) {
  const {
    isModalVisible,
    setIsModalVisible,
    showModal,
    handleCancel,
    handleOk,
  } = props;

  const callback = (key) => {};

  const LoginForm = () => {
    return (
      <div className="login-form">
        <form className="py-2">
          <div className="row m-0">
            <input type={"text"} placeholder="Email" className="input-login" />
          </div>
          <div className="row m-0">
            <input
              type={"password"}
              placeholder="Mật khẩu"
              className="input-login"
            />
          </div>
          <div className="row m-0">
            <a href="#" className="forgot-password p-0">
              Quên mật khẩu?
            </a>
          </div>
          <div className="row m-0 mt-4">
            <div className="button-login text-center cursor-pointer">
              Đăng nhập
            </div>
          </div>
        </form>
      </div>
    );
  };

  const RegisterForm = () => {
    return (
      <div className="login-form">
        <form className="py-2">
          <div className="row m-0">
            <input
              type={"text"}
              placeholder="Họ và tên"
              className="input-login"
            />
          </div>

          <div className="row m-0">
            <div className="col-12 col-md-6 p-0 pr-5px">
              <input
                type={"text"}
                placeholder="Email"
                className="input-login"
              />
            </div>
            <div className="col-12 col-md-6 p-0 pl-5px">
              <input
                type={"tel"}
                placeholder="Số điện thoại"
                className="input-login"
              />
            </div>
          </div>
          <div className="row m-0">
            <div className="col-12 col-md-6 p-0 pr-5px">
              <input
                type={"password"}
                placeholder="Mật khẩu"
                className="input-login"
              />
            </div>
            <div className="col-12 col-md-6 p-0 pr-5px">
              <input
                type={"password"}
                placeholder="Nhập lại mật khẩu"
                className="input-login"
              />
            </div>
          </div>
          <div className="row m-0">
            <input
              type={"text"}
              placeholder="Địa chỉ"
              className="input-login"
            />
          </div>
          <div className="row m-0 mt-4">
            <div className="button-login text-center cursor-pointer">
              Đăng ký
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Đăng nhập" key="1">
          <LoginForm />
        </TabPane>
        <TabPane tab="Đăng ký" key="2">
          <RegisterForm />
        </TabPane>
      </Tabs>
    </Modal>
  );
}
