import { useState, useEffect } from 'react';
import { addFakeListener, removeFakeListener } from '../fake-listener';

export function useDocumentClicked(initCount) {
  const [count, setCount] = useState(initCount);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return [count, setCount];
}


export function useFakeListener(id, onEffectTest) {
  useEffect(() => {
    console.log('=====onEffectTest changed=====')
    addFakeListener(id, onEffectTest);
    return () => removeFakeListener(id);
  }, [id]);
}
