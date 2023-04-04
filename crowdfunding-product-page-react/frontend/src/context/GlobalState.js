import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  selectedEdition:"",
  isOpen:false
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setIsOpen = (value) => {
    dispatch({ type: 'SET_IS_OPEN', payload: value })
  };

  const setSelectedEdition = edition => {
    dispatch({type:'SET_SELECTED_EDITION', payload:edition})
  }

  return (<GlobalContext.Provider value={{
    selectedEdition: state.selectedEdition,
    isOpen: state.isOpen,
    setIsOpen,
    setSelectedEdition
  }}>
    {children}
  </GlobalContext.Provider>)
}