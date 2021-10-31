import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { logger } from '../../common/utils/logger';
import authService from './utils/authApiService';

export type User = {
  name: string;
  email: string;
  accessToken: string;
};

type AuthSlice = {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
};

const initialState: AuthSlice = {
  isLoggedIn: false,
  user: null,
  loading: true,
};

export const checkAuth = createAsyncThunk(
  'auth/check-auth',
  async (): Promise<User> => {
    if (authService.isAuthenticated()) {
      const token = authService.getToken();
      logger(`Check Token validity ${token}`);

      return authService.checkTokenApi(token);
    }

    throw new Error('Not Authenticated');
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
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
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.isLoggedIn = true;
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.isLoggedIn = false;
      });
  },
});

export const { loginUser, logoutUser, setAuthLoading } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export const authReducer = authSlice.reducer;
