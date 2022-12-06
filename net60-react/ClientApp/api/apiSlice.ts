import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7033" }),
  tagTypes: ["Tickets"],
  endpoints: (builder) => ({
    getTickets: builder.query({
      query: () => "/tickets",
      providesTags: ["Tickets"],
    }),
    getTicket: builder.query({
      query: (id) => `/tickets/${id}`,
    }),
    editTicket: builder.mutation({
      query: (ticket) => ({
        url: `/tickets/${ticket.id}`,
        method: "PUT",
        body: ticket,
      }),
      invalidatesTags: ["Tickets"],
    }),
    addNewTicket: builder.mutation({
      query: (ticket) => ({
        url: `/tickets`,
        method: "POST",
        body: ticket,
      }),
      invalidatesTags: ["Tickets"],
    }),
  }),
});

export const {
  useGetTicketsQuery,
  useGetTicketQuery,
  useEditTicketMutation,
  useAddNewTicketMutation,
} = apiSlice;
