import { createSlice } from "@reduxjs/toolkit";

export type AuthSlice = {
    testState: boolean;
    currentWindow: string;
    isLoading: boolean;
};

export const initialState: AuthSlice = {
    testState: true,
    currentWindow: "Student.",
    isLoading: true,
};

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setTestState: (state: AuthSlice, action: any) => {
        state.testState = action.payload;
      },
      setCurrentWindow: (state: AuthSlice, action: any) => {
        state.currentWindow = action.payload;
      },
      setIsLoading: (state: AuthSlice, action: any) => {
        state.isLoading = action.payload;
      }
    },
});

export const {
    setTestState,
    setCurrentWindow,
    setIsLoading,
  } = slice.actions;

export default slice.reducer;
