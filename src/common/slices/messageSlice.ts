import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MessageSlice = {
  message: string;
};

const initialState: MessageSlice = {
  message: '',
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, { payload }: PayloadAction<string>) => {
      state.message = payload;
    },
    clearMessage: (state) => {
      state.message = '';
    },
  },
});

export const { setMessage, clearMessage } = messageSlice.actions;

export const messageReducer = messageSlice.reducer;
