import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://ecomercer-main.vercel.app/"}),
    endpoints: (builder) =>({
        getAllProducts: builder.query({
            query:() => "products",
        }),
    }),
});

export const { useGetAllProductsQuery} = productsApi;