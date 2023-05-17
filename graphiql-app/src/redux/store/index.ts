import { configureStore } from '@reduxjs/toolkit';
import requestSchemaReducer from './requestSchemaSlice';
import requestVariablesReducer from './requestVariablesSlice';
import requestHeadersReducer from './requestHeadersSlice';
import displayVariablesSectionReducer from './displayVariablesSectionSlice';
import optionsSectionTypeReducer from './optionsSectionTypeSlice';
import docReducer from './docSlice';
import { graphqlApi } from '../graphqlApi';

const store = configureStore({
  reducer: {
    requestSchema: requestSchemaReducer,
    requestVariables: requestVariablesReducer,
    requestHeaders: requestHeadersReducer,
    displayVariablesSection: displayVariablesSectionReducer,
    optionsSectionType: optionsSectionTypeReducer,
    doc: docReducer,
    [graphqlApi.reducerPath]: graphqlApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphqlApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
