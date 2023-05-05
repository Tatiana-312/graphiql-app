import { configureStore } from '@reduxjs/toolkit';
import requestSchemaReducer from './requestSchemaSlice';
import requestVariablesReducer from './requestVariablesSlice';
import { graphqlApi } from '../graphqlApi';

const store = configureStore({
  reducer: {
    requestSchema: requestSchemaReducer,
    requestVariables: requestVariablesReducer,
    [graphqlApi.reducerPath]: graphqlApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphqlApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;