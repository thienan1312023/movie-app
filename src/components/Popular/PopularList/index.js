import React from 'react';
import PopularItem from '../PopularItem';
import './styles.scss';

function PopularList({ PopularList }) {
  return (
    <div className="popular-list">
      {
        PopularList && PopularList.length > 0 && PopularList.map((item, index) =>
          <PopularItem key={index} PopularItem={item} />
        )
      }
    </div>
  );
}

export default PopularList;