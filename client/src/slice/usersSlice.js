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
      if (state.users.length === 0) {
        state.users.push(action.payload);
      } else if (state.users.length > 0) {
        if (action.payload.password !== action.payload.repeatPassword) {
          alert("Passwords do not match!");
        } else if (
          state.users.find((user) => user.email === action.payload.email)
        ) {
          alert("User already exists!");
        }
      }
    },
    login: (state, action) => {
      const foundUser = state.users.find(
        (user) => user.email === action.payload.email
      );
      if (foundUser) {
        state.loggedInUser = {
          ...foundUser,
          isLoggedIn: true,
        };
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? { ...user, isLoggedIn: true } : user
        );
      } else {
        alert("Invalid credentials! Please try again.");
      }
    },
    getLoggedInUser: (state, action) => {
      state.loggedInUser = state.users.find((user) => user.isLoggedIn);
    },
    logout: (state, action) => {
      const loggedInUser = state.loggedInUser;
      if (loggedInUser) {
        state.loggedInUser = null;
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? { ...user, isLoggedIn: false } : user
        );
      } else {
        alert("You are not logged in!");
      }
    },
  },
});

export const { getUsers, signup, login, getLoggedInUser, logout } =
  usersSlice.actions;

export default usersSlice.reducer;
