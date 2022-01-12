import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { movies } from "../../mockdata/movies";
export default function MovieComponent(props) {
  const params = useParams();
  const { id, name } = params;
  const firmDetail = movies.find((x) => x.id.toString() === id);
  return (
    <div className="container px-0 py-4">
      <div className="row m-0">
        <h5 className="p-0 mb-3">
          {firmDetail?.englishName || firmDetail?.vietnamName}
        </h5>
      </div>
      <div className="row m-0">
        <div className="col-8 p-0">
          <div className="row m-0">
            <div className="col-4 p-0">
              <img src={firmDetail.imageUrl} alt="image-fimr" width={300} />
            </div>
            <div className="col-8 p-0">{/* detail */}</div>
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
          <h5 className="title-content-firm p-0">NHẬN KHUYẾN MÃI</h5>

          <div class="box-promotion">
            <form>
              <input
                placeholder="Email"
                type="email"
                class="input-email-promotion"
              />
              <button class="register-btn btn primary">đăng ký</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
