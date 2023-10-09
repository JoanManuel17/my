import React from "react";
import AddCategory from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";
import { useState } from "react";
import { useCounter } from "./hooks/UseCounter";

const GiftExpertApp = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    setCategories(list => [...list, category]);
  };

  return (
  <>
    <h1>GiftExpertApp</h1>

    <AddCategory onAddCategory={onAddCategory} />
    <div>
        <p>Counter: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    {
      categories.map((category, key) => 
      {
        return <GifGrid  category={category} key={key}/>
      }
      )
    }
  </>
  )
};

export default GiftExpertApp;
