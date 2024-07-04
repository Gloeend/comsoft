import { createApi } from '@reduxjs/toolkit/query'
import client from "@app/@http-apollo/client.ts";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: async ({ query, data }) => {
        const response = await client.query({query: query, variables: data});
        return response.data;
    },
    endpoints: () => ({}),
});
