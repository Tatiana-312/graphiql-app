import { configureStore } from '@reduxjs/toolkit';
import requestSchemaReducer from './requestSchemaSlice';
import requestVariablesReducer from './requestVariablesSlice';
import requestHeadersReducer from './requestHeadersSlice';
import displayVariablesSectionReducer from './displayVariablesSectionSlice';
import paramsSectionTypeReducer from './paramsSectionTypeSlice';
import parseErrorReducer from './parseError';
import { graphqlApi } from '../graphqlApi';

const store = configureStore({
  reducer: {
    requestSchema: requestSchemaReducer,
    requestVariables: requestVariablesReducer,
    requestHeaders: requestHeadersReducer,
    displayVariablesSection: displayVariablesSectionReducer,
    paramsSectionType: paramsSectionTypeReducer,
    parseError: parseErrorReducer,
    [graphqlApi.reducerPath]: graphqlApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphqlApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
