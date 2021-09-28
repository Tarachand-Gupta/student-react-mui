import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../MainStore";
import { initialState } from "./slice";

const authSlice = (state: RootState) => state.auth || initialState;

export const selectTestState = createSelector(
    [authSlice],
    (state) => state.testState
  );

export const selectCurrentWindow = createSelector(
  [authSlice],
  (state) => state.currentWindow
);

export const selectIsLoading = createSelector(
  [authSlice],
  (state) => state.isLoading
);