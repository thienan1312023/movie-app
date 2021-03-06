/* eslint-disable react/prop-types */
import React from 'react';
import UtilsContext, { getQueryParam } from './context';

const UtilsProvider = ({ children }) => (
  <UtilsContext.Provider value={{ getQueryParam }}>
    {children}
  </UtilsContext.Provider>
);

export default UtilsProvider;
