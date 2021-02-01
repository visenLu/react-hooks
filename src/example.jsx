import React, { useState, useEffect } from 'react';

let timeCounts = 0;

function Example(props) {
  const { onEffectTest } = props;
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(1);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
		const timeInterval = setInterval(() => {
      timeCounts = timeCounts + count;
      onEffectTest(timeCounts);
		}, 1000);

		return function cleanup() {
      clearInterval(timeInterval);
    };
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;
