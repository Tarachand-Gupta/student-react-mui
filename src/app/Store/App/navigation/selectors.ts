import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../MainStore";
import { initialState } from "./slice";

const navigationSlice = (state: RootState) => state.navigation || initialState;

export const selectNavbarOpen = createSelector(
  [navigationSlice],
  (state) => state.navbarOpen
);

export const selectCurrentNavigation = createSelector(
  [navigationSlice],
  (state) => state.currentNavigation
);



