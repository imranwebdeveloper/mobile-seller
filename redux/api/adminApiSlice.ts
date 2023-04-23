import { UpdateVariantPrice } from "@/types/api-body/update-variant-price";
import { Mobile } from "@/types/mobile";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApiSlice = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}`,
    prepareHeaders: (headers, { getState }) => {
      const accessToke: any = getState();
      const token = accessToke.auth.access_token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: ({ mutation, query }) => ({
    getAllMobileList: query({
      query: () => "/mobiles",

      transformResponse: (response: any) => response.data,
    }),
    getMobileById: query({
      query: (id) => `mobiles/${id}`,
      transformResponse: (response: any) => response.data,
    }),

    updateMobilePrice: mutation({
      query: (data: UpdateVariantPrice) => ({
        method: "PUT",
        url: "mobiles/update-price",
        body: data,
      }),
    }),

    updateMobileContent: mutation({
      query: (data: any) => ({
        method: "PUT",
        url: "mobiles/update-content",
        body: data,
      }),
    }),
    addNewMobile: mutation({
      query: (data: any) => ({
        method: "POST",
        url: "mobiles/new-mobile",
        body: data,
      }),
    }),
    deleteMobile: mutation({
      query: (id: string) => ({
        method: "DELETE",
        url: `mobiles/${id}`,
      }),
    }),
  }),
});

export const {
  useGetAllMobileListQuery,
  useGetMobileByIdQuery,
  useUpdateMobilePriceMutation,
  useUpdateMobileContentMutation,
  useAddNewMobileMutation,
  useDeleteMobileMutation,
} = adminApiSlice;
