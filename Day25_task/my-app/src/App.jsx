import { useState } from 'react'
import './App.css'
import Todo from './Todo'


function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const [submittedValue1, setSubmittedValue1] = useState('');
  const [showComponent, setShowComponent] = useState(false);
  const cardsData={submittedValue,submittedValue1};

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  
  const handleInputChange1 = event => {
    setInputValue1(event.target.value);
  };

  const handleSubmit = event => {
     event.preventDefault();
    setSubmittedValue(inputValue);
    setSubmittedValue1(inputValue1);
    setShowComponent(true);
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='element1'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Todo Name"
        />
        <input className='element1'
          type="text"
          value={inputValue1}
          onChange={handleInputChange1}
          placeholder="Todo Description"
        />
        <button type="submit">Submit</button>
        {/* {showComponent && <Todo submittedValue={submittedValue} submittedValue1={submittedValue1} />} */}
        
        {showComponent && (
        <div className="card-list">
          {cardsData.map(card => (
           <Todo submittedValue={submittedValue} submittedValue1={submittedValue1} />
          ))}
        </div>
      )}

      </form>
      
    </div>
  )
}
export default App
