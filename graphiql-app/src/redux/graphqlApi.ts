import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const graphqlApi = createApi({
  reducerPath: 'graphqlApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/graphql' }),
  endpoints: (builder) => ({
    getGraphql: builder.mutation({
      query: (body: string) => ({
        url: '',
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: body,
      }),
    }),
  }),
});

export const { useGetGraphqlMutation } = graphqlApi;
