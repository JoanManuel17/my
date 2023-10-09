
const categories = ["first category"];

export const ComponentApp = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>ComponentApp</h1>
      <ol>
        {categories.map((category, key) => {
          return <li key={key}>{category}</li>;
        })}
      </ol>
    </>
  );
};
