import React, {useReducer} from 'react';
import PopularListReducer from './reducer';

export const PopularContext = React.createContext(null);
const initState = {
  popularList: []
}
export const PopularProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PopularListReducer, initState);
  
  return (
    <PopularContext.Provider value={{
      state,
      dispatch,
    }}>
      {children}
    </PopularContext.Provider>
  );
};