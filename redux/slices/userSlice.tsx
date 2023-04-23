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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<InitialState>) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
      localStorage.setItem(
        process.env.REACT_APP_TOKEN_NAME as string,
        action.payload.access_token as string
      );
    },
    logout: (state) => {
      state.access_token = null;
      state.user = null;
      localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME as string);
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
