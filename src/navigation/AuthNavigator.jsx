import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  ForgotPasswordEmailPromptScreen,
  ForgotPasswordNumberPromptScreen,
  ForgotPasswordScreen,
  HomeScreen,
  OnboardingScreen,
  PaymentMethodScreen,
  SetLocationScreen,
  SetupAccountScreen,
  SignInScreen,
  SignUpScreen,
  SignUpSuccessScreen,
  SplashScreen,
  UploadPhotoScreen,
  VerificationScreen,
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
      <Stack.Screen name="set_location" component={SetLocationScreen} />
      <Stack.Screen name="signUp_success" component={SignUpSuccessScreen} />
      <Stack.Screen name="verification" component={VerificationScreen} />
      <Stack.Screen name="forgot_password" component={ForgotPasswordScreen} />
      <Stack.Screen
        name="forgot_password_number"
        component={ForgotPasswordNumberPromptScreen}
      />
      <Stack.Screen
        name="forgot_password_email"
        component={ForgotPasswordEmailPromptScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
