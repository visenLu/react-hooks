import React, { useState, useEffect } from 'react';
import { addFakeListener, removeFakeListenr, randomString } from './fake-listener';

let timeCounts = 0;

function Example(props) {
  const { onEffectTest } = props;

  const [count, setCount] = useState(1);
  const [id, setId] = useState(randomString());

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    addFakeListener(id, onEffectTest);
    return () => removeFakeListenr(id);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setId(randomString());
        }}
      >
        {id} Click me
      </button>
    </div>
  );
}

export default Example;
