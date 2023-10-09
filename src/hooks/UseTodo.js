import { useState } from "react";

export const useTodo = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (description) => {
    const newTodo = { id: todos.length + 1, description: description, done: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  };

  const countTodos = () => {
    return todos.length;
  };

  const countPendingTodos = () => {
    return todos.filter((todo) => !todo.done).length;
  };

    return {
        addTodo,
        deleteTodo,
        toggleTodo,
        countTodos,
        countPendingTodos
    }
}