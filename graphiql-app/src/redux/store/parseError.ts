import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const parseErrorSlice = createSlice({
  name: 'parseError',
  initialState: '',
  reducers: {
    addParseError: (_state, { payload }: PayloadAction<string>) => payload,
  },
});

export const { addParseError } = parseErrorSlice.actions;

export default parseErrorSlice.reducer;
