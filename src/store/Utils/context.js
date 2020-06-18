import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
// eslint-disable-next-line react-hooks/rules-of-hooks
export const getQueryParam = (queryName) => useQuery().get(queryName);

const UtilsContext = React.createContext();
export default UtilsContext;
