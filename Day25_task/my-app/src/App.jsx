import { useState } from 'react'
import './App.css'
import Todo from './Todo'
import { DropdownButton, Dropdown } from "react-bootstrap"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>todo</h1>
      <div></div>
      <input value="Todo Name"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input value="Todo Description"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button>Add Todo</button><br/><br/>
      <label>My Todos</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label>Status Filter</label>
      <input></input>
      <DropdownButton id="split-button-dropdown" title="Dropdown Title">
      <Dropdown.Item eventKey="1">Dropdown Item 1</Dropdown.Item>
      <Dropdown.Item eventKey="2">Dropdown Item 2</Dropdown.Item>
      <Dropdown.Item eventKey="3">Dropdown Item 3</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Dropdown Item 4</Dropdown.Item>
    </DropdownButton>
      <Todo/>
    </>
  )
}

export default App
