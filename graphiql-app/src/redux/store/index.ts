import { configureStore } from '@reduxjs/toolkit';
import requestSchemaReducer from './requestSchemaSlice';
import requestVariablesReducer from './requestVariablesSlice';
import apiDataReducer from './apiDataSlice';
import { graphqlApi } from '../graphqlApi';

const store = configureStore({
  reducer: {
    requestSchema: requestSchemaReducer,
    requestVariables: requestVariablesReducer,
    apiData: apiDataReducer,
    [graphqlApi.reducerPath]: graphqlApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphqlApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
