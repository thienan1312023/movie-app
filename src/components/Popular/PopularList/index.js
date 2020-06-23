import React from "react";
import PopularItem from "../PopularItem";
import Swiper from "react-id-swiper";
import "./styles.scss";

function PopularList({ PopularList }) {
  
  return (
    <div className="popular-list">
      <Swiper>
        {PopularList &&
          PopularList.length > 0 &&
          PopularList.map((item, index) => (
            <PopularItem key={index} PopularItem={item} />
          ))}
      </Swiper>
    </div>
  );
}

export default PopularList;
