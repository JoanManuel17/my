import { useState } from 'react';

function useCounter(initialValue) {
  const [counter, setcounter] = useState(initialValue);

  const increment = () => {
    setcounter(counter + 1);
  };

  const decrement = () => {
    setcounter(counter - 1);
  };

  const reset = () => {
    setcounter(initialValue);
  };

  return { counter, increment, decrement, reset };
}

export default useCounter;
