import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface DocState {
  history: object[];
  currentName: string;
  currentType: string;
}

const docSlice = createSlice({
  name: 'displayVariablesSection',
  initialState: {
    history: [],
    currentName: 'Docs',
    currentType: '',
  },
  reducers: {
    updateCurrentName: (state: DocState, { payload }: PayloadAction<string>) => {
      state.currentName = payload;
    },
    updateCurrentType: (state: DocState, { payload }: PayloadAction<string>) => {
      state.currentType = payload;
    },
    addHistoryData: (state: DocState, { payload }: PayloadAction<object>) => {
      state.history.push(payload);
    },
    removeHistoryData: (state: DocState) => {
      state.history.pop();
    },
  },
});

export const { updateCurrentName, updateCurrentType, addHistoryData, removeHistoryData } =
  docSlice.actions;

export default docSlice.reducer;
