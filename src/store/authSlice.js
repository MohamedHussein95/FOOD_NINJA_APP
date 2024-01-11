import { createSlice } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const initialState = {
  currentUser: {},
  isAuthenticated: false,
  token: null,
  didTryAutoLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AUTHENTICATE: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    SET_DID_TRY_AUTO_LOGIN: (state) => {
      state.didTryAutoLogin = true;
    },
    LOGOUT_SUCCESS: () => initialState,
  },
});

export const { AUTHENTICATE, SET_DID_TRY_AUTO_LOGIN, LOGOUT_SUCCESS } =
  authSlice.actions;

export const GET_USER = (state) => state.auth.currentUser;

export const GET_DID_TRY_AUTO_LOGIN = (state) => state.auth.didTryAutoLogin;

export const GET_IS_AUTHENTICATED = (state) => state.auth.isAuthenticated;

export const LOG_OUT = async (dispatch) => {
  try {
    //await auth.signOut();
    await SecureStore.deleteItemAsync("userData");
    dispatch(LOGOUT_SUCCESS());
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export default authSlice.reducer;
