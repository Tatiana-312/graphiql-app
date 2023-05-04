import { configureStore } from '@reduxjs/toolkit';
import requestSchemaReducer from './requestSchemaSlice';

const store = configureStore({
  reducer: {
    requestSchema: requestSchemaReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;