import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UpdateVariantPrice } from "../../type/api-body/update-variant-price";
import { Mobile } from "../../type/mobile";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/users`,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = window.localStorage.getItem(
    //     `${process.env.REACT_APP_TOKEN_NAME}`
    //   );
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: ({ mutation, query }) => ({
    loginUser: mutation({
      query: (body) => ({
        method: "POST",
        url: "login",
        body,
      }),
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const { useLoginUserMutation } = userApiSlice;
