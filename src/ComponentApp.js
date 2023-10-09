const categories = ["first category"];
import { useCounter } from "./hooks/UseCounter";

export const ComponentApp = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>ComponentApp</h1>
      <ol>
        <p>Counter: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>

        {categories.map((category, key) => {
          return <li key={key}>{category}</li>;
        })}
      </ol>
    </>
  );
};
