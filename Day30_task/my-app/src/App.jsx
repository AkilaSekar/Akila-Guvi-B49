import React, { useState } from 'react';
import './App.css';
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleUserSave = (user) => {
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <UserList onSelect={handleUserSelect} />
      {selectedUser ? (
        <UserForm user={selectedUser} onSave={handleUserSave} />
      ) : null}
    </div>
  );
}

export default App;
