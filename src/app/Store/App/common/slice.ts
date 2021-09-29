import { createSlice } from "@reduxjs/toolkit";

export type CommonSlice = {
  count: number;
  navbarOpen: boolean;
};

export const initialState: CommonSlice = {
  count: 0,
  navbarOpen: false,
};

const slice = createSlice({
    name: "common",
    initialState,
    reducers: {
      setCount: (state: CommonSlice, action: any) => {
        state.count = action.payload;
      },
      setNavbarOpen: (state: CommonSlice, action: any) => {
        state.navbarOpen = action.payload;
      },
      
    },
});

export const {
  setCount,
  setNavbarOpen,
  } = slice.actions;

export default slice.reducer;
