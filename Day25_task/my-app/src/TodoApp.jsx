// src/components/TodoApp.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const addTodo = (task) => {
    if (task.name.trim() !== '' && task.description.trim() !== '') {
      setTodos([...todos, task]);
    }
  };

  const editTask = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? updatedTask : todo
    );
    setTodos(updatedTodos);
    setEditTodo(null);
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>My Todo</h1>
      
      <TodoForm addTodo={addTodo} editTodo={editTodo} editTask={editTask} />
      <br></br>
      <div className='filter'>
        <span>My Todos</span>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 
        <span>Status Filter</span>
        <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
      {/* <p>Selected Option: {selectedOption}</p> */}
      </div>
      <TodoList option={selectedOption}
        todos={todos}
        setEditTodo={setEditTodo}
        deleteTask={deleteTask}
      />
     
    </div>
  );
}

export default TodoApp;
