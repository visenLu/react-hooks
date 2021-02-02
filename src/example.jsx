import React, { useState, useEffect, useLayoutEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { addFakeListener, removeFakeListenr, randomString } from './fake-listener';

const Example = forwardRef((props, ref) => {
  const { onEffectTest } = props;
  const pRef = useRef(null);

  const [count, setCount] = useState(1);
  const [id, setId] = useState(randomString());

  // useEffect(() => {
  //   pRef.current.style.marginTop = '200px';
  // }, []);

  useLayoutEffect(() => {
    pRef.current.style.marginTop = '200px';
  }, []);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log('=====onEffectTest changed=====')
    addFakeListener(id, onEffectTest);
    return () => removeFakeListenr(id);
  }, [id]);

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
