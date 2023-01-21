import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initalState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initalState);

  const handleClick = (clicked) => {
    setIsClicked({ ...initalState, [clicked]: true});
  }

  return (
    <StateContext.Provider
      value={{ 
        activeMenu, 
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick
       }}
      >
        {children}
      </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);