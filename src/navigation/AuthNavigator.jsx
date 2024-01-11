import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  ForgotPasswordEmailPromptScreen,
  ForgotPasswordNumberPromptScreen,
  ForgotPasswordScreen,
  OnboardingScreen,
  PaymentMethodScreen,
  ResetPasswordScreen,
  ResetPasswordSuccessScreen,
  SetLocationScreen,
  SetupAccountScreen,
  SignInScreen,
  SignUpScreen,
  SplashScreen,
  UploadPhotoScreen,
  VerificationScreen,
} from "../screens";

const Stack = createStackNavigator();

const AuthNavigator = ({ setAuthenticated }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen
        name="signIn"
        component={SignInScreen}
        setAuthenticated={setAuthenticated}
      />
      <Stack.Screen name="signUp" component={SignUpScreen} />
      <Stack.Screen name="setup" component={SetupAccountScreen} />
      <Stack.Screen name="payment" component={PaymentMethodScreen} />
      <Stack.Screen name="upload_photo" component={UploadPhotoScreen} />
      <Stack.Screen name="set_location" component={SetLocationScreen} />

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
      <Stack.Screen name="reset" component={ResetPasswordScreen} />
      <Stack.Screen
        name="reset_success"
        component={ResetPasswordSuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
