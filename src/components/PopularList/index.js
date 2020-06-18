import React, { useEffect, useState } from 'react';
import { ButtonGroup } from 'reactstrap'
import { PopularContext } from '../../store/PopularList';
import { getPopularMovieList } from '../../services/PopularList.services'
import PopularItem from './item';
import './styles.scss';

function Popular() {

  const { state, dispatch } = React.useContext(PopularContext);
  const [popularList, setPopularList] = useState([]);
  const [isActiveTV, setIsActiveTV] = useState(true);
  useEffect(() => {
    getPopularMovieList()
      .then(response => response.json())
      .then(data => dispatch({ type: 'setPopularList', payload: { popularList: data } }));
  }, [dispatch]);

  useEffect(() => {
    setPopularList(state?.popularList?.results);
  }, [state, state.popularList]);
 const onToggle = (type) => {
   if(type === 'tv'){
     setIsActiveTV(true)
   }else{
    setIsActiveTV(false)
   }
 }
  return (
    <div className="popular-container">
      <div className="popular-container__control">
        <h2>What's Populars</h2>
        <ButtonGroup aria-label="Basic example"> 
          <div className={isActiveTV ? "select-active" : "select-disbled"} onClick={() => onToggle('tv')}>On TV</div>
          <div className={!isActiveTV ? "select-active" : "select-disbled"} onClick={() => onToggle('theaters')}>In Theaters</div>
        </ButtonGroup>
      </div>

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