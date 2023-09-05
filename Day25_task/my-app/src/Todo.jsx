import React from 'react'

function Todo(props) {
  return (
    <div>
       <label  className="element">My Todos</label>
      <label  className="element">Status Filter</label>
      <div className="card">
    <h2 className="card-title">Todo</h2>
    <div className="card-content">
      <p><label>Name:</label>{props.submittedValue}</p>
      <p><label>Description:</label>{props.submittedValue1}</p>
      <button className="element1">Edit</button><button className="element1">Delete</button>
    </div>
  </div>
  </div>
  )
}

export default Todo