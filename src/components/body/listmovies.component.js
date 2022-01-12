import React from "react";
import {movies} from "../../mockdata/movies";
import { Tabs } from "antd";
const { TabPane } = Tabs;



export default function ListMoviesComponent(props) {
  const callback = (key) => {};
  const listMovie = (isPlaying = true) => {
    const listMovies = isPlaying ? movies : movies.reverse();
    return (
      <div className="row mt-2">
        {listMovies.map((item, index) => {
          return (
            <a
              href={`/dat-ve/${item.name}`}
              key={index}
              className="col-12 col-md-6 col-lg-3 mb-3"
            >
              <div className="table-image">
                <img
                  src={item.imageUrl}
                  alt="image-movie"
                  className="image-firm"
                />
              </div>
              <div className="mt-1">
                <h4 className="m-0 title mb-1">{item.englishName}</h4>
                <h4 className="m-0 title vn">{item.vietnamName}</h4>
              </div>
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container m-auto list-movies">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Phim đang chiếu" key="1">
          {listMovie()}
        </TabPane>
        <TabPane tab="Phim sắp chiếu" key="2">
          {listMovie(false)}
        </TabPane>
      </Tabs>
    </div>
  );
}
