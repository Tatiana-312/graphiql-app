import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const apiDataSlice = createSlice({
  name: 'apiData',
  initialState: '',
  reducers: {
    addApiData: (_state, { payload }: PayloadAction<string>) => payload,
  },
});

export const { addApiData } = apiDataSlice.actions;

export default apiDataSlice.reducer;
