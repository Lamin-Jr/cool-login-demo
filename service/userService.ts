"use client"

import axios from 'axios';

const UserService = axios.create({
  baseURL: 'https://gorest.co.in/public/v2/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer f7ce6047db0a1d1109f5477fd86939b9a7f693c8af2e592af45b6ed9e9cd6694',
  },
});


export default UserService;




