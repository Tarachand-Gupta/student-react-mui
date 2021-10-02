import { createSlice } from "@reduxjs/toolkit";

export type NavigationSlice = {
  navbarOpen: boolean;
  currentNavigation: string;
};

export const initialState: NavigationSlice = {
  navbarOpen: false,
  currentNavigation: "Student.",
};

const slice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavbarOpen: (state: NavigationSlice, action: any) => {
      state.navbarOpen = action.payload;
    },
    setCurrentNavigation: (state: NavigationSlice, action: any) => {
      state.currentNavigation = action.payload;
    },

  },
});

export const {
  setNavbarOpen,
  setCurrentNavigation,
} = slice.actions;

export default slice.reducer;
