import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// Get all users
export const getUsers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Create a new user
export const createUser = async (user) => {
  const response = await axios.post(BASE_URL, user);
  return response.data;
};

// Update a user by ID
export const updateUser = async (userId, user) => {
  const response = await axios.put(`${BASE_URL}/${userId}`, user);
  return response.data;
};

// Delete a user by ID
export const deleteUser = async (userId) => {
  await axios.delete(`${BASE_URL}/${userId}`);
};
