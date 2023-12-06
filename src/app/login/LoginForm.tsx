'use client';

import { Box, Button, Container, Paper } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { LogInFormFieldType } from '@/Index';
import SelectField from '@/SelectField';
import { TextInputField } from '@/InputField';
import '@/LoginForm.css';
import UserService from '@/userService';

const LoginForm = () => {
  const [formField, setFormField] = useState<LogInFormFieldType | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputErroR, setInputError] = useState(false);
  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await UserService.post('/users', formField);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const onHandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setFormField(
      (prevState) => ({ ...prevState, [name]: value }) as LogInFormFieldType,
    );
  };

  const handleGetusers = async () => {
    const response  = await UserService.get('users?page=1&per_page=100');

  };

  return (
    <Paper elevation={5} className={'longin-container'} square>
      <form>
        <TextInputField
          id="name"
          label="name"
          name="name"
          width="48%"
          value={formField?.name}
          onChange={(e: any) => onHandleInputChange(e)}
        />
        <TextInputField
          id="email"
          error={inputErroR}
          label="email"
          name="email"
          type="email"
          width="49%"
          value={formField?.email}
          onChange={(e: any) => onHandleInputChange(e)}
        />
        <SelectField
          id="gender"
          name="gender"
          label="gender"
          width="xs"
          value={formField?.gender}
          selections={[
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' },
          ]}
          onChange={(e: any) => onHandleInputChange(e)}
        />
        <SelectField
          id="status"
          name="status"
          label="status"
          width="xs"
          value={formField?.status}
          selections={[
            { label: 'active', value: 'active' },
            { label: 'inactive', value: 'inactive' },
          ]}
          fullWidth
          onChange={(e: any) => onHandleInputChange(e)}
        />
        <Button
          variant="contained"
          className={'login-form-btn'}
          fullWidth={false}
          onClick={handleLogin}
        >
          {loading ? 'Loading...' : 'Create User'}
        </Button>
      </form>
      <Button
        onClick={handleGetusers}
      >
        Show all Users
      </Button>

    </Paper>
  );
};

export default LoginForm;
