import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    age: 0,
    post: '',
    joiningDate: '',
    salary: '',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleOpenAddModal = () => {
    setAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  const handleOpenUpdateModal = (userId) => {
    setSelectedUserId(userId);
    setUpdateModalOpen(true);
    const selectedUser = users.find((user) => user.id === userId);
    setNewUser(selectedUser);
  };

  const handleCloseUpdateModal = () => {
    setUpdateModalOpen(false);
    setSelectedUserId(null);
    setNewUser({
      name: '',
      email: '',
      phone: '',
      age: 0,
      post: '',
      joiningDate: '',
      salary: '',
    });
  };

  const handleInputChange = (e, fieldName) => {
    setNewUser({ ...newUser, [fieldName]: e.target.value });
  };

  const handleAddUser = async () => {
    try {
      const response = await axios.post('http://localhost:4000/users', newUser);
      setUsers([...users, response.data]);
      setNewUser({
        name: '',
        email: '',
        phone: '',
        age: 0,
        post: '',
        joiningDate: '',
        salary: '',
      });
      handleCloseAddModal();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/users/${selectedUserId}`, newUser);
      setUsers(users.map((user) => (user.id === selectedUserId ? response.data : user)));
      handleCloseUpdateModal();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
    <Box sx={{  }}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
      <Item>
        {/* Button to open Add User Modal */}
        <Button onClick={handleOpenAddModal} variant="contained" style={{ borderRadius: "999px", height: "70px", justifyContent: "flex-start", marginLeft: '-10px', backgroundColor: "#6146E3" }}>
          <AddIcon style={{ fontSize: "50px" }} />
        </Button>
      </Item>
    </Grid>
        <Grid item xs={12}>
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Post</TableCell>
              <TableCell>Joining Date</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.post}</TableCell>
                <TableCell>{user.joiningDate}</TableCell>
                <TableCell>{user.salary}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenUpdateModal(user.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteUser(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Grid>
      
      </Grid>
    </Box>

      {/* Add User Modal */}
      <Modal open={isAddModalOpen} onClose={handleCloseAddModal}>
        <Paper>
          <Stack p={2} spacing={2}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={newUser.name}
              onChange={(e) => handleInputChange(e, 'name')}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={newUser.email}
              onChange={(e) => handleInputChange(e, 'email')}
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              value={newUser.phone}
              onChange={(e) => handleInputChange(e, 'phone')}
            />
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              type="number"
              value={newUser.age}
              onChange={(e) => handleInputChange(e, 'age')}
            />
            <TextField
              label="Post"
              variant="outlined"
              fullWidth
              value={newUser.post}
              onChange={(e) => handleInputChange(e, 'post')}
            />
            <TextField
              label="Joining Date"
              variant="outlined"
              fullWidth
              value={newUser.joiningDate}
              onChange={(e) => handleInputChange(e, 'joiningDate')}
            />
            <TextField
              label="Salary"
              variant="outlined"
              fullWidth
              value={newUser.salary}
              onChange={(e) => handleInputChange(e, 'salary')}
            />
            <Button onClick={handleAddUser} variant="contained" color="primary">
              Add User
            </Button>
          </Stack>
        </Paper>
      </Modal>

      {/* Update User Modal */}
      <Modal open={isUpdateModalOpen} onClose={handleCloseUpdateModal}>
        <Paper>
          <Stack p={2} spacing={2}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={newUser.name}
              onChange={(e) => handleInputChange(e, 'name')}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={newUser.email}
              onChange={(e) => handleInputChange(e, 'email')}
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              value={newUser.phone}
              onChange={(e) => handleInputChange(e, 'phone')}
            />
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              type="number"
              value={newUser.age}
              onChange={(e) => handleInputChange(e, 'age')}
            />
            <TextField
              label="Post"
              variant="outlined"
              fullWidth
              value={newUser.post}
              onChange={(e) => handleInputChange(e, 'post')}
            />
            <TextField
              label="Joining Date"
              variant="outlined"
              fullWidth
              value={newUser.joiningDate}
              onChange={(e) => handleInputChange(e, 'joiningDate')}
            />
            <TextField
              label="Salary"
              variant="outlined"
              fullWidth
              value={newUser.salary}
              onChange={(e) => handleInputChange(e, 'salary')}
            />
            <Button onClick={handleUpdateUser} variant="contained" color="primary">
              Update User
            </Button>
          </Stack>
        </Paper>
      </Modal>

   

     
    </div>
  );
};

export default UserList;
