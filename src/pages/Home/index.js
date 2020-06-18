import React from 'react'
import HeaderContainer from '../../containers/Header'
import SearchBarContainer from '../../containers/SearchBar'
import PopularContainer from '../../containers/Popular'

function Home() {
    return (
        <React.Fragment>
            <HeaderContainer />
            <SearchBarContainer />
            <PopularContainer />
        </React.Fragment>
    )
}
export default Home;