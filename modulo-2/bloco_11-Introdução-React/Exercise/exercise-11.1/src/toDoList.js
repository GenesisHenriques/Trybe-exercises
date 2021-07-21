import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['a','b','c','d','e','f'];

class ToDoList extends React.Component {
  render() {
    return(
      tarefas.map(value => Task(value))
    )
  }
}

export default ToDoList