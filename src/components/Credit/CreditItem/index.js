import React from "react";
import "./styles.scss";

const ORG_URL = "https://image.tmdb.org/t/p/w220_and_h330_face";

function CreditItem({ CreditItem }) {
  const { profile_path, name, character } = CreditItem;
  return (
    <div className="credit-item">
      <div className="credit-item__main">
        <div className="credit-item__image">
          <img src={ORG_URL + profile_path} alt="poster" />
        </div>
      </div>
      <div className="credit-item__content">
        <div className="credit-item__content__title">{name}</div>
        <div className="credit-item__content__release">{character}</div>
      </div>
    </div>
  );
}

export default CreditItem;
