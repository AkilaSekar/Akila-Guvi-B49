import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onUpdate }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
