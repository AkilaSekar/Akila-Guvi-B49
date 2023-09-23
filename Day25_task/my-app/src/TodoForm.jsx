// src/components/TodoForm.js
import React, { useState, useEffect } from 'react';

function TodoForm({ addTodo, editTodo, editTask }) {
  const [task, setTask] = useState({ name: '', description: '' });

  useEffect(() => {
    if (editTodo) {
      setTask(editTodo);
    }
  }, [editTodo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTodo) {
      editTask(editTodo.id, task);
    } else {
      addTodo({
        ...task,
        id: Date.now(),
      });
    }
    setTask({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        name="name"
        value={task.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Task Description"
        name="description"
        value={task.description}
        onChange={handleInputChange}
      />
      <button type="submit">{editTodo ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default TodoForm;
