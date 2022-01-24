import { Modal, DatePicker, Select } from "antd";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movies, cinemas } from "../../mockdata/movies";
import moment from "moment";

export default function MovieComponent(props) {
  const params = useParams();
  const navigate = useNavigate();

  const { name } = params;
  const { Option } = Select;
  const firmDetail = movies.find((x) => x.name.toString() === name);
  const show = () => {
    console.log("ok");
  };
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

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleBuyTicket = (name) => {
    console.log(name);
    navigate(`../mua-ve/${name}`);
  };

  const listTime = [
    "11:00",
    "11:00",
    "11:00",
    "11:00",
    "11:00",
    "11:00",
    "11:00",
    "11:00",
    "11:00",
    "11:00",
    "11:00",
  ];
  return (
    <div className="container px-0 py-4">
      <div className="row m-0">
        <div className="col-8 p-0">
          <div className="row m-0">
            <h5 className="p-0 mb-3">
              {firmDetail?.englishName || firmDetail?.vietnamName}
            </h5>
          </div>
          <div className="row m-0">
            <div className="col-4 p-0">
              <img
                className="cursor-pointer"
                src={firmDetail.detailImageUrl || firmDetail.imageUrl}
                alt="image-film"
                width={300}
                onClick={showModal}
              />
            </div>
            <div className="col-8 pl-30">
              <div className="mt-1 d-flex">
                <label className="text-disable">Thể loại:&nbsp;</label>
                <div>{firmDetail.details.type}</div>
              </div>
              <div className="mt-1 d-flex">
                <label className="text-disable">Đạo diễn:&nbsp;</label>
                <div>{firmDetail.details.directors}</div>
              </div>
              <div className="mt-1 d-flex">
                <label className="text-disable">Nhà sản xuất:&nbsp;</label>
                <div>{firmDetail.details.producer}</div>
              </div>
              <div className="mt-1 d-flex">
                <label className="text-disable">Quốc gia:&nbsp;</label>
                <div>{firmDetail.details.nation}</div>
              </div>
              <div className="mt-1 d-flex">
                <label className="text-disable">Diễn viên:&nbsp;</label>
                <div>{firmDetail.details.cast}</div>
              </div>
              <div className="mt-1 d-flex">
                <label className="text-disable">Ngày:&nbsp;</label>
                <div>{firmDetail.details.date}</div>
              </div>
              <div className="mt-1 d-flex">
                <label className="text-disable">Thời gian:&nbsp;</label>
                <div>{firmDetail.details.time}</div>
              </div>
            </div>
          </div>
          <div className="row m-0 mt-5">
            <h5 className="title-content-firm p-0">NỘI DUNG PHIM</h5>
            <div className="p-0">
              {firmDetail &&
                firmDetail.details &&
                firmDetail.details.description &&
                firmDetail.details.description.map((desc, idx) => {
                  return <p className="mb-1 description-line">{desc}</p>;
                })}
            </div>
          </div>
        </div>
        <div className="col-4 p-0">
          <h5 className="title-content-firm p-0">MUA VÉ</h5>

          <div class="box-promotion">
            <div className="p-0">
              <div className="row m-0">
                <div className="p-0 pb-1 title-quick-buy text-disable">
                  Chọn rạp
                </div>
                <Select
                  className={"mb-3"}
                  showSearch
                  placeholder="Select a cinema"
                  optionFilterProp="children"
                  onChange={onChange}
                  defaultValue={"all"}
                >
                  {cinemas.map((cinema) => {
                    return (
                      <Option key={cinema.value} value={cinema.value}>
                        {cinema.name}
                      </Option>
                    );
                  })}
                </Select>
                <div className="p-0 pb-1 title-quick-buy text-disable">
                  Chọn ngày
                </div>
                <DatePicker
                  className={"mb-3"}
                  onChange={onChange}
                  defaultValue={moment()}
                />
                <div className="p-0 pb-1 title-quick-buy text-disable">
                  Chọn suất
                </div>
                <div className="m-0 mb-3 row time-box">
                  {listTime.map((time) => {
                    return (
                      <div className="col-2 time-item">
                        <div className="sometime-list text-center">{time}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <button
              class="register-btn btn primary"
              onClick={() => handleBuyTicket(firmDetail.name)}
            >
              MUA VÉ
            </button>
          </div>
        </div>
      </div>
      {isModalVisible && (
        <Modal
          title={firmDetail?.englishName || ""}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          className={"videoModal"}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OgYDLH_kqj4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal>
      )}
    </div>
  );
}
