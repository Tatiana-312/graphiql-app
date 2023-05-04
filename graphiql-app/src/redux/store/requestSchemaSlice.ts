import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const requestSchemaSlice = createSlice({
  name: 'requestSchema',
  initialState: '',
  reducers: {
    addRequestSchema: (_state, { payload }: PayloadAction<string>) => payload,
  },
});

export const { addRequestSchema } = requestSchemaSlice.actions;

export default requestSchemaSlice.reducer;