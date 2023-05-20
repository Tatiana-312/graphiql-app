import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  id: null,
  pending: true,
  formLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
    setPending(state, action) {
      state.pending = action.payload;
    },
    setFormLoading(state, action) {
      state.formLoading = action.payload;
    },
  },
});

export const { setUser, removeUser, setPending, setFormLoading } = userSlice.actions;
export default userSlice.reducer;
