import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import AuthNavigator from "./AuthNavigator";

const RootNavigator = ({ onReady }) => {
  return (
    <NavigationContainer onReady={onReady}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
