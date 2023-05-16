import { configureStore } from '@reduxjs/toolkit';
import requestSchemaReducer from './requestSchemaSlice';
import requestVariablesReducer from './requestVariablesSlice';
import requestHeadersReducer from './requestHeadersSlice';
import displayVariablesSectionReducer from './displayVariablesSectionSlice';
import optionsSectionTypeReducer from './optionsSectionTypeSlice';
import parseErrorReducer from './parseError';
import { graphqlApi } from '../graphqlApi';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    requestSchema: requestSchemaReducer,
    requestVariables: requestVariablesReducer,
    requestHeaders: requestHeadersReducer,
    displayVariablesSection: displayVariablesSectionReducer,
    optionsSectionType: optionsSectionTypeReducer,
    parseError: parseErrorReducer,
    [graphqlApi.reducerPath]: graphqlApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphqlApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
