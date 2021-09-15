import { useState } from 'react/cjs/react.development';
import './App.css';
import ToDoProvider from './context/ToDoProvider';
import Form from './pages/form';
import Lista from './pages/Lista';

function App() {
  return (
    <main>
      <ToDoProvider>
        <Form />
        <Lista />
      </ToDoProvider>
    </main>
  );
}

export default App;
