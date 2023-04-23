import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UpdateVariantPrice } from "../../type/api-body/update-variant-price";
import { Mobile } from "../../type/mobile";

export const mobileApiSlice = createApi({
  reducerPath: "mobileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/mobiles`,
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem(
        `${process.env.REACT_APP_TOKEN_NAME}`
      );
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: ({ mutation, query }) => ({
    getAllMobileList: query({
      query: () => "list",
      transformResponse: (response: any) => response.data,
    }),
    getAllMobileById: query({
      query: (id) => id,
      transformResponse: (response: any) => response.data,
    }),

    updateMobilePrice: mutation({
      query: (data: UpdateVariantPrice) => ({
        method: "PUT",
        url: "update-price",
        body: data,
      }),
    }),

    updateMobileContent: mutation({
      query: (data: any) => ({
        method: "PUT",
        url: "update-content",
        body: data,
      }),
    }),
    addNewMobile: mutation({
      query: (data: Mobile) => ({
        method: "POST",
        url: "new-mobile",
        body: data,
      }),
    }),
    deleteMobile: mutation({
      query: (id: string) => ({
        method: "DELETE",
        url: `${id}`,
      }),
    }),
  }),
});

export const {
  useGetAllMobileListQuery,
  useGetAllMobileByIdQuery,
  useUpdateMobilePriceMutation,
  useUpdateMobileContentMutation,
  useAddNewMobileMutation,
  useDeleteMobileMutation,
} = mobileApiSlice;
