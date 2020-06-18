import React, { useState, useContext } from 'react';
import { Input } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';

import {UtilsContext} from '../../store/Utils';
import './styles.scss';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ isLandingPage }) => {
  const { getQueryParam } = useContext(UtilsContext);
  const query = getQueryParam('query');
  const [searchWord, setSearchWord] = useState(query);
  const queryCommand = searchWord ? `?query=${searchWord}` : '';
  const history = useHistory();

  const handleKeyPress = (target) => {
    if (target.charCode === 13) {
      history.push(`search${queryCommand}`);
    }
  };

  return (
    <div className={isLandingPage ? 'searchContainerMain' : 'searchContainer'}>
      <Input
        placeholder="Search for a movie, tv show, person......"
        className='searchInput'
        bsSize="lg"
        onChange={(e) => { setSearchWord(e.target.value); }}
        onKeyPress={handleKeyPress}
        value={searchWord || ''}
      />
      <Link to={`search${queryCommand}`} className='searchButton'>Search</Link>
    </div>
  );
};

export default SearchBar;
