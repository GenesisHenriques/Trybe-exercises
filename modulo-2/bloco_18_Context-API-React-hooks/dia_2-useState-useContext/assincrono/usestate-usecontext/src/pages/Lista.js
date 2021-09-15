import React, { useContext } from "react";
import ToDoContext from "../context/ToDoContext";

function Lista() {
  const { todos } = useContext(ToDoContext);
  return (
    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
  );
}

export default Lista;