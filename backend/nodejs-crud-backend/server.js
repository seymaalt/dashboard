const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());

let users = [
  { id: 1, name: 'Arden Spencer1', email: 'Evangeline62@yahoo.com', phone: '(023) 708-6818 x4267', age: 28, post: 'UX Researcher', joiningDate: 'June 20, 2015', salary: '$26253.0' },
  { id: 2, name: 'Arden Spencer2', email: 'Evangeline62@yahoo.com', phone: '(023) 708-6818 x4267', age: 28, post: 'UX Researcher', joiningDate: 'June 20, 2015', salary: '$26253.0' },
  { id: 3, name: 'Arden Spencer3', email: 'Evangeline62@yahoo.com', phone: '(023) 708-6818 x4267', age: 28, post: 'UX Researcher', joiningDate: 'June 20, 2015', salary: '$26253.0' },
  { id: 4, name: 'Arden Spencer4', email: 'Evangeline62@yahoo.com', phone: '(023) 708-6818 x4267', age: 28, post: 'UX Researcher', joiningDate: 'June 20, 2015', salary: '$26253.0' },
];

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a specific user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

// Create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;

  users.push(newUser);

  res.status(201).json(newUser);
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  users = users.map(user => (user.id === userId ? { ...user, ...updatedUser } : user));

  res.json(updatedUser);
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);

  res.status(204).end();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
