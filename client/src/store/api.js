import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://-api.vercel.app",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().app.token || localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({ query: () => ({ url: "/", method: "GET" }) }),
    loginUser: builder.mutation({ query: (payload) => ({ url: "/login", method: "POST", body: payload }) }),
    registerUser: builder.mutation({ query: (payload) => ({ url: "/register", method: "POST", body: payload }) }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useGetUserQuery } = api;
