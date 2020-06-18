import React from 'react';
import { Input, Button } from 'reactstrap';
 
import './styles.scss';
// eslint-disable-next-line arrow-body-style
const SearchBar = () => {
  return (
    <div className='searchContainer'>
      <Input
        placeholder="Search for a movie, tv show, person......"
        className='searchInput'
      />
      <Button color="success" className='searchButton'>Search</Button>
    </div>
  );
};
 
export default SearchBar;