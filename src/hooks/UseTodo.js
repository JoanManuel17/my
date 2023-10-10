import { useEffect, useReducer } from "react";
import { TodoReducer } from "../components/TodoReducer";
import * as types from "../components/types";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: types.CREATE_TODO,
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: types.DELETE_TODO,
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: types.TOGGLE_TODO,
      payload: id,
    };
    dispatch(action);
  };

  const countTodos = () => {
    return todos.length;
  };

  const countPendingTodos = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    countTodos,
    countPendingTodos,
  };
};
