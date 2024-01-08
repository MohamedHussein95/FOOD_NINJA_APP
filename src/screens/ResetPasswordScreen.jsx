import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { BackButton, Header, Input, PrimaryButton } from "../components";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, ({ min }) => `password should be at least ${min} characters`)
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "password does not match")
    .required("Password Is Required"),
});

const ResetPasswordScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const handleResetPassword = async (email) => {
    try {
      console.log(email);
      // TODO: reset password
      navigation.navigate("reset_success");
    } catch (error) {}
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <BackButton
        title={"Reset your password here"}
        subtitle={
          "This data will be displayed in your account profile for security"
        }
      />

      <Formik
        initialValues={{
          email: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleResetPassword(values.email)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formik}>
            <Input
              name="password"
              placeholder="New Password"
              onChangeText={handleChange("password")}
              onBlur={(e) => {
                handleBlur("password")(e);
                setPasswordFocused(false);
              }}
              active={passwordFocused}
              onFocus={() => setPasswordFocused(true)}
              value={values.password}
              keyboardType="default"
              IconPack={Ionicons}
              iconRight={showPassword ? "eye-off" : "eye"}
              secureTextEntry={showPassword ? false : true}
              onPressIconRight={() => setShowPassword(!showPassword)}
              errors={errors.password}
              touched={touched.password}
              inputMode="text"
              autoComplete="password-new"
            />
            <Input
              name="confirmPassword"
              placeholder="Confirm Password"
              onChangeText={handleChange("confirmPassword")}
              onBlur={(e) => {
                handleBlur("confirmPassword")(e);
                setConfirmPasswordFocused(false);
              }}
              active={confirmPasswordFocused}
              onFocus={() => setConfirmPasswordFocused(true)}
              value={values.confirmPassword}
              IconPack={Ionicons}
              iconRight={showPassword ? "eye-off" : "eye"}
              secureTextEntry={showPassword ? false : true}
              onPressIconRight={() => setShowPassword(!showPassword)}
              errors={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <PrimaryButton
                text={"Next"}
                onPress={handleSubmit}
                styles={{ marginBottom: hp(2) }}
              />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  formik: {
    paddingHorizontal: wp(4),
    gap: 12,
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    gap: hp(5),
    paddingTop: hp(10),
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
