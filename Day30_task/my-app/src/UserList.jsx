import React, { useEffect, useState } from 'react';
import { getUsers } from './api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>         
        ))}
      </ul>
    </div>
  );
};

export default UserList;
