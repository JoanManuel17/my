import React from "react";
import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import TodoList from "./TodoList";
import {TodoAdd} from "./TodoAdd";
import { useEffect } from "react";
import * as  types  from "./types";

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const initialState = [
  {
    id: new Date().getTime(),
    description: "Aprender React",
    done: false,
  },
];

export const TodoApp = () => {
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

  return (
    <>
      <h1>
        Todo App: 10 <small>pendientes: 2</small>{" "}
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};