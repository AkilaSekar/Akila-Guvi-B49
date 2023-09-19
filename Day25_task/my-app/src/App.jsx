import { useState } from 'react'
import './App.css'
import Todo from './Todo'


function App() {
  const [showComponentB, setShowComponentB] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setShowComponentB(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
    <h3>My todo</h3>
    <div className='divClass'>
      <input 
            type="text" 
            placeholder="Todo Name" 
            value={inputValue}
            onChange={handleInputChange}>
      </input> 
      {/* <input  
            type="text" 
            placeholder="Todo Description">
            value={inputValue}
            onChange={handleInputChange}
            
      </input> */}
      <button onClick={handleClick}>Add Todo</button>
      {showComponentB && <Todo inputValue={inputValue} />}
      
    </div>
    </>
  )
}
export default App
