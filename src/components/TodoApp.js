import React from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/UseTodo";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    countTodos,
    countPendingTodos,
  } = useTodos();

  return (
    <div>
      <h1>Todo App</h1>
      <TodoAdd handleNewTodo={handleNewTodo} />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleTodo={handleToggleTodo}
      />
      <p>CountTodos : {countTodos()}</p>
      <p>CountPendingTodos: {countPendingTodos()}</p>
    </div>
  );
};
