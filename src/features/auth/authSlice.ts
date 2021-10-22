import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from './services/authTypes';

type AuthSlice = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
};

const initialState: AuthSlice = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
      state.isAuthenticated = !!payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, setAuthLoading, logoutUser } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export const authReducer = authSlice.reducer;
