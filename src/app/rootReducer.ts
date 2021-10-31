import { combineReducers } from '@reduxjs/toolkit';
import { messageReducer } from '../common/slices/messageSlice';
import { authReducer } from '../features/auth/authSlice';

export default combineReducers({
  auth: authReducer,
  message: messageReducer,
});
