import React, { createContext, useReducer } from 'react';

const initialState = {
  type: {},
  timer: null,
};

const reducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case 'TYPE_TIMEOUT':
      return action.payload
        ? {
            type: action.payload,
          }
        : { type: {} };
    case 'RESET':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

// Create Context Object
export const TypeContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const TypeContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TypeContext.Provider value={[state, dispatch]}>
      {props.children}
    </TypeContext.Provider>
  );
};
