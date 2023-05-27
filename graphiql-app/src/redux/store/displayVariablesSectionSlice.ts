import { createSlice } from '@reduxjs/toolkit';

interface SectionState {
  active: boolean;
}

const displayVariablesSectionSlice = createSlice({
  name: 'displayVariablesSection',
  initialState: {
    active: false,
  },
  reducers: {
    changeDisplayVariablesSection: (state: SectionState) => {
      state.active = !state.active;
    },
  },
});

export const { changeDisplayVariablesSection } = displayVariablesSectionSlice.actions;

export default displayVariablesSectionSlice.reducer;
