import React from 'react';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={() => onUpdate(todo.id)}>Edit</button>
    </div>
  );
};

export default TodoItem;