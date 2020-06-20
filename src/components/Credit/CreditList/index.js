import React from "react";
import CreditItem from "../CreditItem";
import "./styles.scss";

function CreditList({ CreditList }) {
  return (
    <React.Fragment>
      <div className="credit-list">
        <div className="credit-list__content">
          {CreditList &&
            CreditList.length > 0 &&
            CreditList.map((item, index) => (
              <CreditItem key={index} CreditItem={item} />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreditList;
