import React from "react";
import CreditItem from "../CreditItem";
import Swiper from "react-id-swiper";
import "./styles.scss";

function CreditList({ CreditList }) {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }
 
  return (
    <React.Fragment>
      <div className="credit-list">
        <div className="credit-list__content">
          <Swiper {...params}>
            {CreditList &&
              CreditList.length > 0 &&
              CreditList.map((item, index) => (
                <CreditItem key={index} CreditItem={item} />
              ))}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreditList;
