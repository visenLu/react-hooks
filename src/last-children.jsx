import React, { useContext } from 'react';
import Store from './store';

export default function LastChildren() {
  const store = useContext(Store);
  return (
    <div>
      {store.id}
    </div>
  )
}
