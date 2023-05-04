import { configureStore } from '@reduxjs/toolkit';
import requestSchemaReducer from './requestSchemaSlice';
import requestVariablesReducer from './requestVariablesSlice';

const store = configureStore({
  reducer: {
    requestSchema: requestSchemaReducer,
    requestVariables: requestVariablesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;