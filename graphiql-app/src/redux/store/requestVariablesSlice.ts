import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const requestVariablesSlice = createSlice({
  name: 'requestVariables',
  initialState: '',
  reducers: {
    addRequestVariables: (_state, { payload }: PayloadAction<string>) => payload,
  },
});

export const { addRequestVariables } = requestVariablesSlice.actions;

export default requestVariablesSlice.reducer;
