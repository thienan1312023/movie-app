import React, { useEffect, useState } from 'react';
import { PopularContext } from '../../store/PopularList';
import { getPopularMovieList } from '../../services/PopularList.services'
import PopularItem from './item';
import './styles.scss';

function Popular() {
  
  const { state, dispatch } = React.useContext(PopularContext);
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    getPopularMovieList()
      .then(response => response.json())
      .then(data => dispatch({ type: 'setPopularList', payload: { popularList: data } }));
  }, [dispatch]);

  useEffect(() => {
    setPopularList(state?.popularList?.results);
  }, [state, state.popularList]);

  return (
    <div className="popular-container">
      <h2>What's Populars</h2>
      <div className="popular-list">
        {
          popularList && popularList.length > 0 && popularList.map((item, index) =>
            <PopularItem key={index} PopularItem={item} />
          )
        }
      </div>
    </div>
  );
}

export default Popular;