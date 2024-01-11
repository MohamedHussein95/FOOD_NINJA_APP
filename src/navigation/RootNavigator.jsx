import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SplashScreen } from "../screens";
import { useSelector } from "react-redux";
import {
  GET_DID_TRY_AUTO_LOGIN,
  GET_IS_AUTHENTICATED,
} from "../store/authSlice";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const RootNavigator = ({ onReady }) => {
  const isAuth = useSelector(GET_IS_AUTHENTICATED);
  const didTryAutoLogin = useSelector(GET_DID_TRY_AUTO_LOGIN);
  return (
    <NavigationContainer onReady={onReady}>
      {isAuth && didTryAutoLogin && <MainNavigator />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <SplashScreen />}
    </NavigationContainer>
  );
};

export default RootNavigator;
