import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../MainStore";
import { initialState } from "./slice";

const commonSlice = (state: RootState) => state.common || initialState;

export const selectCount = createSelector(
    [commonSlice],
    (state) => state.count
);

export const selectNavbarOpen = createSelector(
  [commonSlice],
  (state) => state.navbarOpen
);

