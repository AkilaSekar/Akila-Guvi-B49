// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setEditTodo, deleteTask ,option}) {
  return (
    <div >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setEditTodo={setEditTodo}
          deleteTask={deleteTask}
          option={option}
        />
      ))}
      
    </div>
  );
}

export default TodoList;
