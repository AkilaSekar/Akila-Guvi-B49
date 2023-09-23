import React, { useState } from 'react';
import { createUser, updateUser } from './api';

const UserForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.id) {
      await updateUser(user.id, formData);
    } else {
      const newUser = await createUser(formData);
      onSave(newUser);
    }
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;
