
import { createSlice } from "@reduxjs/toolkit";
import { Usersdata } from "./Data";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: Usersdata },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateUsername: (state, action) => {
      state.value.forEach((user) => {
        if (user.id === action.payload.id) {
          user.firstName = action.payload.firstName;
          user.lastName = action.payload.lastName;
          user.email = action.payload.email;
          user.phone = action.payload.phone;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
