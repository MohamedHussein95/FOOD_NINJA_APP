import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  HomeScreen,
  OnboardingScreen,
  SignInScreen,
  SignUpScreen,
  SplashScreen,
} from "../screens";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="signIn" component={SignInScreen} />
      <Stack.Screen name="signUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
