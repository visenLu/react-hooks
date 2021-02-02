import { useRef, useState, useCallback, useReducer } from 'react';
import './App.css';
import Example from './example';
import ExampleCls from './example-cls';
import { randomString } from './fake-listener';
import Store, { initState, reducer } from './store';

function App() {
  const exampleRef = useRef(null);
  const [remove, setRemove] = useState(false);
  const [effectTest, setEffectTest] = useState(0);

  const [store, dispatch] = useReducer(reducer, initState);

  // const onEffectTest = (value) => setEffectTest(value);

  const onEffectTest = useCallback((value) => {
    setEffectTest(value)
  }, []);
  return (
    <Store.Provider value={{ ...store, dispatch }}>
      <div className="App">
        HOOK TEST
        <div>Effect hook Test: {store.id} {effectTest}</div>
        {!remove && <Example onEffectTest={onEffectTest} ref={exampleRef} />}

        <button
          onClick={() => {
            // setRemove(!remove);
            // dispatch({ id: randomString() });
          }}
        >
          remove
        </button>
      </div>
    </Store.Provider>
  );
}

export default App;
