import React, { useState } from "react";

export const TodoAdd = ({ handleNewTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      const newTodo = {
        id: new Date().getTime(),
        description: inputValue,
        done: false,
      };
      handleNewTodo(newTodo);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar tarea..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
