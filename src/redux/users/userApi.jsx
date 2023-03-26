import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://641fef4d82bea25f6df72176.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'contacts/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('/users');
      return resp.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchOneUser = createAsyncThunk(
  'contacts/fetchOneUser',
  async (id, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`/users/${id}`);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteOneUser = createAsyncThunk(
  'contacts/deleteOneUser',
  async (id, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`/users/${id}`);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addUser = createAsyncThunk(
  'contacts/addUser',
  async (userData, { rejectWithValue }) => {
    try {
      const resp = await axios.post(`/users/`, userData);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeUser = createAsyncThunk(
  'contacts/changeUser',
  async (userData, { rejectWithValue }) => {
    try {
      const resp = await axios.put(`/users/${userData.id}`, userData);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
