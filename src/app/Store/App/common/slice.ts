import { createSlice } from "@reduxjs/toolkit";

export type CommonSlice = {
  count: number;
};

export const initialState: CommonSlice = {
  count: 0,
};

const slice = createSlice({
    name: "common",
    initialState,
    reducers: {
      setCount: (state: CommonSlice, action: any) => {
        state.count = action.payload;
      },
      
    },
});

export const {
  setCount,
  } = slice.actions;

export default slice.reducer;
