import React, { useContext, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { randomString } from './fake-listener';
import { useDocumentClicked, useFakeListener } from './hooks';
import LastChildren from './last-children';
import Store from './store';

const Example = forwardRef((props, ref) => {
  const { onEffectTest } = props;
  const pRef = useRef(null);

  const { dispatch, ...store } = useContext(Store);

  const [count, setCount] = useDocumentClicked(1);

  useFakeListener(store.id, onEffectTest);

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
          // pRef.current.style.backgroundColor = 'red';
          // setCount(count + 1);
          dispatch({ type: 'change', payload: randomString() });
        }}
      >
        {store.id} Click me
      </button>
      <LastChildren />
    </div>
  );
});

export default Example;
