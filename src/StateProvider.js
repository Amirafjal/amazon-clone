//  setup data layer
// we need this to track the basket 

import React, { createContext, useContext, useReducer } from "react";

// no need to understandthis just write :::
// this is the data layer
export const StateContext = createContext();

// build a provider to wrap entire app
// global react variable
// copy paste
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

// this is how we use it inside of a component:::
export const useStateValue = () => useContext(StateContext)