import { createSlice } from '@reduxjs/toolkit';

import {
  addUser,
  changeUser,
  deleteOneUser,
  fetchOneUser,
  fetchUsers,
} from './userApi';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.isLoading = true;
      state.items = payload;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, { payload }) => {
      state.isLoading = true;
      state.error = payload;
    });

    builder.addCase(fetchOneUser.pending, (state, { payload }) => {
      state.isLoading = true;
      state.error = payload;
    });

    builder.addCase(fetchOneUser.fulfilled, (state, { payload }) => {
      state.isLoading = true;
      state.currentUser = payload;
      state.error = null;
    });

    builder.addCase(fetchOneUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    // builder.addCase(deleteOneUser.pending, (state, { payload }) => {
    // 	state.isLoading = true;
    // 	state.error = payload;
    // });

    builder.addCase(deleteOneUser.fulfilled, (state, { payload }) => {
      state.isLoading = true;
      state.items = state.items.filter(contact => contact.id !== payload.id);
      state.error = null;
    });

    builder.addCase(deleteOneUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(addUser.pending, (state, { payload }) => {
      state.isLoading = true;
      state.error = payload;
    });

    builder.addCase(addUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    });

    builder.addCase(addUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(changeUser.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(changeUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(changeUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

// deleteOneUser

export const userReducer = userSlice.reducer;
