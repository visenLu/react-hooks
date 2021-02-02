import { useRef, useState, useCallback } from 'react';
import './App.css';
import Example from './example';
import ExampleCls from './example-cls';
import { randomString } from './fake-listener';
import Store, { initState } from './store';

function App() {
  const exampleRef = useRef(null);
  const [remove, setRemove] = useState(false);
  const [effectTest, setEffectTest] = useState(0);

  const [store, setStore] = useState(initState);

  // const onEffectTest = (value) => setEffectTest(value);

  const onEffectTest = useCallback((value) => {
    setEffectTest(value)
  }, []);
  return (
    <Store.Provider value={store}>
      <div className="App">
        HOOK TEST
        <div>Effect hook Test: {store.id} {effectTest}</div>
        {!remove && <Example onEffectTest={onEffectTest} ref={exampleRef} />}

        <button
          onClick={() => {
            // setRemove(!remove);
            setStore({ id: randomString() });
          }}
        >
          remove
        </button>
      </div>
    </Store.Provider>
  );
}

export default App;
