import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export default appSlice.reducer;
export const { setToken } = appSlice.actions;
