import { FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const graphqlApi = createApi({
  reducerPath: 'graphqlApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getGraphql: builder.mutation({
      query: (options: FetchArgs) => options,
    }),
    getGraphqlSchema: builder.mutation({
      query: (options: FetchArgs) => options,
    }),
  }),
});

export const { useGetGraphqlMutation, useGetGraphqlSchemaMutation } = graphqlApi;
