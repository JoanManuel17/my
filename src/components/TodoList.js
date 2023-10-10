import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
    localStorage.setItem("todos", JSON.stringify(updatedTodoList));
  };

  const handleToggleTodo = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    setTodoList(updatedTodoList);
  };

  return (
    <ul className="list-group">
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
        />
      ))}
    </ul>
  );
};
