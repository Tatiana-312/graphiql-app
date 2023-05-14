import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InputObjectType, ObjectType, ScalarType } from '../../components/GraphDoc/docs.interface';

interface DocState {
  history: MyObjectType[];
}
export interface MyObjectType {
  name: string;
  currentData: object | ObjectType | ScalarType | InputObjectType;
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
    addHistoryData: (state: DocState, { payload }: PayloadAction<MyObjectType>) => {
      state.history.push(payload);
    },
    removeHistoryData: (state: DocState) => {
      state.history.pop();
    },
  },
});

export const { addHistoryData, removeHistoryData } = docSlice.actions;

export default docSlice.reducer;
