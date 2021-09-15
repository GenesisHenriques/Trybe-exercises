import React, { useState } from "react";
import ToDoContext from "./ToDoContext";

function ToDoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addToDo = (newTodo) => {
    setTodos(todos.concat(newTodo))
  }

  return (
    <main>
      <ToDoContext.Provider value={{ todos, addToDo }}>
        {children}
      </ToDoContext.Provider>
    </main>
  );
}

export default ToDoProvider