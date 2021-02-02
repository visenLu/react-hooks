import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { randomString } from './fake-listener';
import { useDocumentClicked, useFakeListener } from './hooks';

const Example = forwardRef((props, ref) => {
  const { onEffectTest } = props;
  const pRef = useRef(null);

  const [id, setId] = useState(randomString());
  // const [count, setCount] = useState(1);
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }, [count]);

  const [count, setCount] = useDocumentClicked(1);

  useFakeListener(id, onEffectTest);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  useImperativeHandle(ref, () => ({
    setBackground: () => { pRef.current.style.backgroundColor = 'red'; }
  }));

  return (
    <div>
      <p ref={pRef}>You clicked {count} times</p>
      <button
        onClick={() => {
          pRef.current.style.backgroundColor = 'red';
          setCount(count + 1);
          setId(randomString());
        }}
      >
        {id} Click me
      </button>
    </div>
  );
});

export default Example;
