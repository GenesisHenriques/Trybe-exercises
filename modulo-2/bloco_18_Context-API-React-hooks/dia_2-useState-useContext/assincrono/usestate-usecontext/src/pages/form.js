import React, { useState, useContext } from 'react';
import ToDoContext from '../context/ToDoContext';

function Form() {

  const { addToDo } = useContext(ToDoContext);

  function handleChange({ target }) {
    setNewToDo(target.value);
  }

  function handleClick() {
    addToDo(newToDo);
    setNewToDo('');
  }

  const [ newToDo, setNewToDo ] = useState('');

  return (
    <>
      <form>
        <label>
          Insira uma tarefa:
          <input type="text" name="tarefa" value={newToDo} onChange={handleChange} />
          <button type="button" onClick={handleClick}>Adicionar tarefa</button>
        </label>
      </form>
    </>
  );
}

export default Form;