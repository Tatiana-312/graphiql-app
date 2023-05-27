import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const requestHeadersSlice = createSlice({
  name: 'requestHeaders',
  initialState: '',
  reducers: {
    addRequestHeaders: (_state, { payload }: PayloadAction<string>) => payload,
  },
});

export const { addRequestHeaders } = requestHeadersSlice.actions;

export default requestHeadersSlice.reducer;
