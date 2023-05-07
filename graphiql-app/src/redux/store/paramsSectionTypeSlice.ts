import { createSlice } from '@reduxjs/toolkit';

const paramsSectionTypeSlice = createSlice({
  name: 'paramsSectionType',
  initialState: 'variables',
  reducers: {
    openVariablesSection: (_state: string) => 'variables',
    openHeadersSection: (_state: string) => 'headers',
  },
});

export const { openVariablesSection, openHeadersSection } = paramsSectionTypeSlice.actions;

export default paramsSectionTypeSlice.reducer;
