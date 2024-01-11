import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    SET_THEME: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { SET_THEME } = settingsSlice.actions;
export const GET_THEME = (state) => state.settings.darkMode;

export default settingsSlice.reducer;
