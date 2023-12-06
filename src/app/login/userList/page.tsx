'use client'

import { useEffect, useState } from 'react';
import { LogInFormFieldType } from '@/Index';
import UserService from '@/userService';
import { Box, CircularProgress, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

interface Page extends  LogInFormFieldType{
  id: number
}
const UserList = ()=> {
  const [users, setUsers] = useState<Page[]>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserService.get('users?page=1&per_page=100');

        if (response.data) {
          setUsers(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return <div>
    <Typography variant="h6">User List</Typography>
    {loading && <CircularProgress />}
    {error && (
      <Typography variant="body2" color="error">
        Error: {'users?.length'}
      </Typography>
    )}
    {Number(users?.length) > 0 && (
      <List>
        {users?.map((user) => (
          <ListItem key={user.id}>
            <ListItemText
              primary={`Name: ${user.name} | Email: ${user.email} | Gender: ${user.gender} | Status: ${user.status}`}
            />
          </ListItem>
        ))}
      </List>
    )}
  </div>
}

export default UserList