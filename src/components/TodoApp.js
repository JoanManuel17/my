import React from "react";
import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import TodoList from "./TodoList";
import {TodoAdd} from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Aprender React",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "TODO ADD",
      payload: todo,
    };

    dispatch(action);

  };

  return (
    <>
      <h1>
        Todo App: 10 <small>pendientes: 2 </small>{" "}
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
