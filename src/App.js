import { useState } from 'react';
import './App.css';
import Example from './example';
import ExampleCls from './example-cls';

function App() {
  const [remove, setRemove] = useState(false);
  const [effectTest, setEffectTest] = useState(0);
  return (
    <div className="App">
      HOOK TEST
      <div>Effect hook Test: {effectTest}</div>
      {!remove && <Example onEffectTest={(value) => setEffectTest(value)} />}

      <button onClick={() => setRemove(!remove)}>
        remove
      </button>
    </div>
  );
}

export default App;
