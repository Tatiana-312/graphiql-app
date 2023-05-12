import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface DocState {
  currentPlace: string;
}

const docSlice = createSlice({
  name: 'displayVariablesSection',
  initialState: {
    currentPlace: '',
  },
  reducers: {
    updateCurrentPlace: (state: DocState, { payload }: PayloadAction<string>) => {
      state.currentPlace = payload;
    },
  },
});

export const { updateCurrentPlace } = docSlice.actions;

export default docSlice.reducer;
