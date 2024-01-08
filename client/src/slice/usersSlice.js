import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loggedInUser: null,
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    signup: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? { ...user, isLoggedIn: true } : user
      );
    },
    getLoggedInUser: (state, action) => {
      state.loggedInUser = state.users.find(
        (user) => user.id === action.payload.id
      );
    },
    logout: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? { ...user, isLoggedIn: false } : user
      );
    },
  },
});

export const { getUsers, signup, login, getLoggedInUser, logout } =
  usersSlice.actions;

export default usersSlice.reducer;
