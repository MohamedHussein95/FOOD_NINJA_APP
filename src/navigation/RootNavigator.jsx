import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const RootNavigator = ({ onReady }) => {
  return (
    <NavigationContainer onReady={onReady}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
