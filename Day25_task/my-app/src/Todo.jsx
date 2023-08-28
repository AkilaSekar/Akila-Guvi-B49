import React from 'react'

function Todo(props) {
  return (
    <div>
       <label  className="element">My Todos</label>
      <label  className="element">Status Filter</label>
      <div class="card">
    <h2 class="card-title">Todo</h2>
    <div class="card-content">
      <p><label>Name:</label>{props.submittedValue}</p>
      <p><label>Description:</label>{props.submittedValue1}</p>
    </div>
  </div>
      
    </div>
  )
}

export default Todo