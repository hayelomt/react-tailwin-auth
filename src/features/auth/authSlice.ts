import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import authService from './utils/authApiService';

export type User = {
  name: string;
  email: string;
  accessToken: string;
};

type AuthSlice = {
  isLoggedIn: boolean;
  user: User | null;
};

const initialState: AuthSlice = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<User>) => {
      authService.setUser(payload);
      state.isLoggedIn = true;
      state.user = payload;
    },
    logoutUser: (state) => {
      authService.clearUser();
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export const authReducer = authSlice.reducer;
