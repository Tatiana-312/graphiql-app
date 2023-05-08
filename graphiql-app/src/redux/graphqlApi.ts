import { FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const graphqlApi = createApi({
  reducerPath: 'graphqlApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getGraphql: builder.mutation({
      // query: (body: string) => ({
      //   url: '',
      //   method: 'POST',
      //   headers: { 'Content-type': 'application/json' },
      //   body: body,
      // }),
      query: (options: FetchArgs) => (options),
    }),
  }),
});

export const { useGetGraphqlMutation } = graphqlApi;
