import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InputObjectType, ObjectType, ScalarType } from '../../components/GraphDoc/docs.interface';

interface DocState {
  history: MyObjectType[];
  active: boolean;
  disable: boolean;
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
    active: false,
    disable: true,
  },
  reducers: {
    addHistoryData: (state: DocState, { payload }: PayloadAction<MyObjectType>) => {
      state.history.push(payload);
    },
    removeHistoryData: (state: DocState) => {
      state.history.pop();
    },
    changeVisibility: (state: DocState) => {
      state.active = !state.active;
    },
    disableButton: (state: DocState) => {
      state.disable = true;
    },
    enableButton: (state: DocState) => {
      state.disable = false;
    },
  },
});

export const { addHistoryData, removeHistoryData, changeVisibility, disableButton, enableButton } =
  docSlice.actions;

export default docSlice.reducer;
