import { FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getIntrospectionQuery } from 'graphql';

export const graphqlApi = createApi({
  reducerPath: 'graphqlApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getGraphql: builder.mutation({
      query: (options: FetchArgs) => options,
    }),
    getGraphqlSchema: builder.mutation({
      query: (url: string) => ({
        url: url,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          operationName: 'IntrospectionQuery',
          query: getIntrospectionQuery(),
        }),
      }),
    }),
  }),
});

export const { useGetGraphqlMutation, useGetGraphqlSchemaMutation } = graphqlApi;
