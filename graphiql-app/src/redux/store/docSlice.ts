import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface DocState {
  history: object[];
}

const docSlice = createSlice({
  name: 'displayVariablesSection',
  initialState: {
    history: [
      {
        name: 'Docs',
        currentData: {},
      },
    ],
  },
  reducers: {
    addHistoryData: (state: DocState, { payload }: PayloadAction<object>) => {
      state.history.push(payload);
    },
    removeHistoryData: (state: DocState) => {
      state.history.pop();
    },
  },
});

export const { addHistoryData, removeHistoryData } = docSlice.actions;

export default docSlice.reducer;
