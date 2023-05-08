import { createSlice } from '@reduxjs/toolkit';

const optionsSectionTypeSlice = createSlice({
  name: 'paramsSectionType',
  initialState: 'variables',
  reducers: {
    openVariablesSection: (_state: string) => 'variables',
    openHeadersSection: (_state: string) => 'headers',
  },
});

export const { openVariablesSection, openHeadersSection } = optionsSectionTypeSlice.actions;

export default optionsSectionTypeSlice.reducer;
