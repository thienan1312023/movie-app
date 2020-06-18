import React from 'react';
import Popular from '../../components/PopularList/index';
import { PopularProvider } from '../../store/PopularList/provider';
function PopularContainer() {
    return (
        <PopularProvider>
            <Popular />
        </PopularProvider>

    );
}
export default PopularContainer;