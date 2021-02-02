import { useRef, useState } from 'react';
import './App.css';
import Example from './example';
import ExampleCls from './example-cls';

function App() {
  const exampleRef = useRef(null);
  const [remove, setRemove] = useState(false);
  const [effectTest, setEffectTest] = useState(0);
  return (
    <div className="App">
      HOOK TEST
      <div>Effect hook Test: {effectTest}</div>
      {!remove && <Example onEffectTest={(value) => setEffectTest(value)} ref={exampleRef} />}

      <button
        onClick={() => {
          // setRemove(!remove);
          exampleRef.current.style.backgroundColor = 'red';
        }}
      >
        remove
      </button>
    </div>
  );
}

export default App;
