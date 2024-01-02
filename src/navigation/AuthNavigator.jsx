import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  HomeScreen,
  OnboardingScreen,
  PaymentMethodScreen,
  SetupAccountScreen,
  SignInScreen,
  SignUpScreen,
  SplashScreen,
  UploadPhotoScreen,
} from "../screens";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="signIn" component={SignInScreen} />
      <Stack.Screen name="signUp" component={SignUpScreen} />
      <Stack.Screen name="setup" component={SetupAccountScreen} />
      <Stack.Screen name="payment" component={PaymentMethodScreen} />
      <Stack.Screen name="upload_photo" component={UploadPhotoScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
