import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { hp, wp } from "../utils";
import { Colors } from "../constants";
import { Input, PrimaryButton } from "../components";
import { Ionicons, Octicons } from "@expo/vector-icons";

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
      navigation.navigate("reset_success");
    } catch (error) {}
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,

          gap: hp(5),
          paddingTop: hp(10),
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/Pattern_diagnol.png")}
            style={styles.imagePattern}
            resizeMode="cover"
          />
        </View>
        <View style={{ paddingHorizontal: wp(4) }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.secondary100,
              padding: wp(1),
              borderRadius: wp(3),
              width: wp(13),
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            <Octicons
              name="chevron-left"
              size={30}
              color={Colors.secondary400}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "bold",
              fontSize: wp(7),
              lineHeight: hp(4),
              marginVertical: hp(4),
            }}
          >
            Reset your password here
          </Text>
          <Text
            style={{
              fontFamily: "book",
              fontSize: wp(4),
              lineHeight: hp(3),
              marginVertical: hp(0),
            }}
          >
            Please choose a new strong password that you wont forget
          </Text>
        </View>

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
            handleReset,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <View style={{ paddingHorizontal: wp(4), gap: 12, flex: 1 }}>
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
                iconRight={showPassword ? "eye" : "eye-off"}
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
                iconRight={showPassword ? "eye" : "eye-off"}
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
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  textWrapper: {
    alignItems: "center",
    padding: wp(3),
    gap: hp(4),
    backgroundColor: Colors.background,
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePattern: { width: "100%", height: hp(30) },
});
