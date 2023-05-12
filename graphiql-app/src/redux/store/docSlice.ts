import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface DocState {
  currentName: string;
  currentType: string;
}

const docSlice = createSlice({
  name: 'displayVariablesSection',
  initialState: {
    currentName: '/',
    currentType: '',
  },
  reducers: {
    updateCurrentName: (state: DocState, { payload }: PayloadAction<string>) => {
      state.currentName = payload;
    },
    updateCurrentType: (state: DocState, { payload }: PayloadAction<string>) => {
      state.currentType = payload;
    },
  },
});

export const { updateCurrentName, updateCurrentType } = docSlice.actions;

export default docSlice.reducer;
