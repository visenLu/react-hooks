import React from 'react'
import { randomString } from '../fake-listener';

export const initState = {
  id: randomString(),
};

const store = React.createContext(initState);

export default store;