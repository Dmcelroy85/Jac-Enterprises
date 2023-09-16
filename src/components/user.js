
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

//  users
let users = [
  { id: 1, name: 'helen', age: 7, address: '11 Main St' },
  { id: 2, name: 'Alice', age: 9, address: '22 Broad St' },
  { id: 3, name: 'tom', age: 12, address: '29 Ambarwent rd'},
  { id: 1, name: 'helen', age: 7, address: '11 Main St' },
  { id: 2, name: 'Alice', age: 9, address: '22 Broad St' },
  { id: 3, name: 'tom', age: 12, address: '29 Ambarwent rd'}
];

// GET to retrieve all users
app.get('/api/users/all', (req, res) => {
  res.json(users);
});

// POST to create a new user
app.post('/api/users/add', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.json(newUser);
});

// PUT to update a user by ID
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
