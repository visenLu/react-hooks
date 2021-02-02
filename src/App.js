import { useRef, useState, useCallback } from 'react';
import './App.css';
import Example from './example';
import ExampleCls from './example-cls';

function App() {
  const exampleRef = useRef(null);
  const [remove, setRemove] = useState(false);
  const [effectTest, setEffectTest] = useState(0);

  // const onEffectTest = (value) => setEffectTest(value);

  const onEffectTest = useCallback((value) => {
    setEffectTest(value)
  }, []);
  return (
    <div className="App">
      HOOK TEST
      <div>Effect hook Test: {effectTest}</div>
      {!remove && <Example onEffectTest={onEffectTest} ref={exampleRef} />}

      <button
        onClick={() => {
          // setRemove(!remove);
          exampleRef.current.setBackground();
        }}
      >
        remove
      </button>
    </div>
  );
}

export default App;
