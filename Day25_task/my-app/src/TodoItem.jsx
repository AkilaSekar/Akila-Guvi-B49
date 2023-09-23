// src/components/TodoItem.js
import React,{useState} from 'react';

function TodoItem({ todo, setEditTodo, deleteTask,option }) {
  const [selectedOption1, setSelectedOption1] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleEdit = () => {
    setEditTodo(todo);
  };

  const handleDelete = () => {
    deleteTask(todo.id);
  };
  
  return (
   
    <div className='card'>
     
        <p>Name: {todo.name}</p>
        <p>Description: {todo.description}</p>
      <span>Status</span>
        <select value={selectedOption1} onChange={handleDropdownChange}>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
      <br></br> <br></br>
      
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      
      </div>
    
  );

}

export default TodoItem;
