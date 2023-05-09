import { createSlice } from '@reduxjs/toolkit';

const optionsSectionTypeSlice = createSlice({
  name: 'paramsSectionType',
  initialState: 'variables',
  reducers: {
    openVariablesSection: () => 'variables',
    openHeadersSection: () => 'headers',
  },
});

export const { openVariablesSection, openHeadersSection } = optionsSectionTypeSlice.actions;

export default optionsSectionTypeSlice.reducer;
