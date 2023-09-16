import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
  address: string;
}

const UserDisplay: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/all');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age: parseInt(age), address }),
      });

      if (response.ok) {
        console.log('User added successfully');
        fetchUsers();
      } else {
        console.error('Failed to add user');
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const updateUser = async (userId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age: parseInt(age), address }),
      });

      if (response.ok) {
        console.log('User updated successfully');
        fetchUsers();
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2 onClick={fetchUsers}>User List</h2>
      <ul>
      {users.map((user) => (
          <li>
            <strong>ID:</strong> {user.id}, <strong>Name:</strong> {user.name}, <strong>Age:</strong> {user.age}, <strong>Address:</strong> {user.address}
          </li>
        ))}
        </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id}, <strong>Name:</strong> {user.name}, <strong>Age:</strong> {user.age}, <strong>Address:</strong> {user.address}
            <button onClick={() => updateUser(user.id)}>Update</button>
          </li>
        ))}
      </ul>

      <h2>Add User</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default UserDisplay;
