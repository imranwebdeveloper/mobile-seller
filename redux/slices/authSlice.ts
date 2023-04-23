import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  roles: [];
  _id: string;
  img: string;
}

interface InitialState {
  user: User | null;
  access_token: string | null;
  isLoading: boolean;
}

const initialState = {
  user: null,
  access_token: null,
  isLoading: true,
} as InitialState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<InitialState>) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
    },
    logout: (state) => {
      state.access_token = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
