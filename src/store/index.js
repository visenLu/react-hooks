import React from 'react'
import { randomString } from '../fake-listener';

export const initState = {
  id: randomString(),
};


export const reducer = (state, action) => {
  switch (action.type) {
    case 'change':
      return { ...state, id: action.payload };
    default:
      throw state;
  }
}

const store = React.createContext(initState);

export default store;