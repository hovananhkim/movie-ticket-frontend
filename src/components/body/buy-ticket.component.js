import React, { useState } from "react";
import { listSeats } from "../../mockdata/movies";

export default function BuyTicketComponent(props) {
  const [pX, setPX] = useState(null);
  const [pY, setPY] = useState(null);

  const setPost = (y, x) => {
    setPX(x);
    setPY(y);
  };

  const checkPosition = (x, y) => {
    const { room, seats } = listSeats;

    const obj = seats.find((val) => val.x === x && val.y == y);

    return {
      success: obj ? true : false,
      data: obj || {},
    };
  };

  const checkCanSelect = () => {};
  const Seats = () => {
    const { room, seats } = listSeats;
    const rows = new Array(room.lengthY).fill(1);
    const cols = new Array(room.lengthX).fill(2);

    return rows.map((valRow, row) => {
      return (
        <div className="row m-0 px-12 justify-content-center">
          {cols.map((valCol, col) => {
            const { data, success } = checkPosition(col, row);
            return success ? (
              <div
                className={`col p-0 text-center seat d-flex justify-content-center flex-column  ${
                  pX === col && pY === row ? "highlight" : ""
                }
                ${data.isReserved ? "disable-seat" : "cursor-pointer"}`}
                onClick={() => {
                  if (data.isReserved === false) {
                    setPost(row, col);
                  }
                }}
              >
                {col}
              </div>
            ) : (
              <div
                className={`col p-0 text-center d-flex justify-content-center flex-column `}
              ></div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="container select-seat">
      <div className="row">
        <div className="col-9 p-0 select-seat-parent">
          <div className="select-seat-title">CHỌN GHẾ</div>
          <div>
            <div className="text-center">
              <div>Màn hình</div>
              <div className="screen"></div>
            </div>
            <Seats />
          </div>
        </div>
        <div className="col-3">
          <div className="ticket-preview">
            <div className="p-1 ">
              <img
                className="ticket-preview-img"
                src="https://www.galaxycine.vn/media/2021/12/7/1350x900_1638861163467.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
