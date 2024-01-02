import MaskedView from "@react-native-masked-view/masked-view";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import { appDescription, appName, logoStyles } from ".././constants";
import { CustomSwitch, Input, PrimaryButton } from "../components/";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required()
    .label("email")
    .test("email", "Invalid email address", (value) => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
    }),
  password: Yup.string()
    .min(8, ({ min }) => `password should be at least ${min} characters`)
    .required(),
  userName: Yup.string()
    .test(
      "no-white-space",
      "User Name cannot contain white spaces",
      (value) => {
        return !/\s/.test(value); // Test if value contains white spaces
      }
    )
    .matches(/^@[^-]/, 'User Name must start with "@" symbol')
    .min(3)
    .max(15)
    .required()
    .label("User Name"),
});

const SignUpScreen = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [userNameFocused, setUserNameFocused] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [emailMe, setEmailMe] = useState(true);

  const navigation = useNavigation();

  const handleSubmitValues = async (email, password) => {
    try {
      setLoading(true);
      navigation.navigate("setup");
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Colors.light_white }}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: hp(1) }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Pattern.png")}
          style={styles.imagePattern}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", Colors.light_white]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "50%",
          }}
        />
      </View>

      <View style={[styles.logoContainer, { marginTop: hp(2) }]}>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={logoStyles.logo}
          resizeMode="contain"
        />
        <MaskedView
          style={logoStyles.maskedContainer}
          maskElement={
            <View
              style={{
                backgroundColor: "transparent",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={logoStyles.appName}>{appName}</Text>
            </View>
          }
        >
          <LinearGradient
            colors={Colors.green_gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </MaskedView>
        <Text style={logoStyles.appDescription}>{appDescription}</Text>
      </View>
      <Text
        style={{
          fontFamily: "bold",
          fontSize: wp(5),
          letterSpacing: 0.5,
          textAlign: "center",
          marginVertical: hp(5),
        }}
      >
        Sign Up For Free
      </Text>
      <Formik
        initialValues={{
          email: "asd@gmail.com",
          password: "U12345678",
          userName: "@asdsad",
        }}
        onSubmit={(values) => handleSubmitValues(values.email, values.password)}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{ paddingHorizontal: wp(4), gap: 12, flex: 1 }}>
            <Input
              name="userName"
              placeholder="Username"
              onChangeText={handleChange("userName")}
              onBlur={(e) => {
                handleBlur("userName")(e);
                setUserNameFocused(false);
              }}
              active={userNameFocused}
              onFocus={() => setUserNameFocused(true)}
              value={values.userName}
              autoComplete="name"
              image={require("../../assets/images/Profile.png")}
              errors={errors.userName}
              touched={touched.userName}
              autoCapitalize="words"
            />
            <Input
              name="email"
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={(e) => {
                handleBlur("email")(e);
                setEmailFocused(false);
              }}
              active={emailFocused}
              onFocus={() => setEmailFocused(true)}
              value={values.email}
              keyboardType="email-address"
              autoComplete="email"
              image={require("../../assets/images/Message.png")}
              errors={errors.email}
              touched={touched.email}
              autoCapitalize="none"
              returnKeyType="done"
              inputMode="email"
            />

            <Input
              name="password"
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={(e) => {
                handleBlur("password")(e);
                setPasswordFocused(false);
              }}
              active={passwordFocused}
              onFocus={() => setPasswordFocused(true)}
              value={values.password}
              keyboardType="default"
              image={require("../../assets/images/Lock.png")}
              iconRight={showPassword ? "eye" : "eye-off"}
              secureTextEntry={showPassword ? false : true}
              onPressIconRight={() => setShowPassword(!showPassword)}
              errors={errors.password}
              touched={touched.password}
              inputMode="text"
              autoComplete="password-new"
            />
            <View
              style={{ flexGrow: 1, flex: 1, marginTop: hp(1), gap: hp(1) }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 13,
                  marginTop: hp(1),
                }}
              >
                <CustomSwitch
                  status={rememberMe}
                  onPress={() => setRememberMe(!rememberMe)}
                  size={0.5}
                />
                <Text
                  style={{
                    fontFamily: "book",
                    fontSize: wp(4),
                    letterSpacing: 0.5,
                    textAlign: "center",
                    color: Colors.greyScale500,
                  }}
                >
                  Keep Me Signed In
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 13,
                  marginTop: hp(1),
                }}
              >
                <CustomSwitch
                  status={emailMe}
                  onPress={() => setEmailMe(!emailMe)}
                  size={0.5}
                />
                <Text
                  style={{
                    fontFamily: "book",
                    fontSize: wp(4),
                    letterSpacing: 0.5,
                    textAlign: "center",
                    color: Colors.greyScale500,
                  }}
                >
                  Email Me About Special Pricing
                </Text>
              </View>
            </View>

            <PrimaryButton
              text={"Create Account"}
              onPress={handleSubmit}
              styles={{ marginBottom: hp(2) }}
            />
          </View>
        )}
      </Formik>
      <TouchableOpacity
        style={{}}
        onPress={() => navigation.navigate("signIn")}
      >
        <Text
          style={{
            fontFamily: "medium",
            fontSize: wp(3.5),
            letterSpacing: 0.5,
            textDecorationLine: "underline",
            textAlign: "center",
            color: Colors.success,
          }}
        >
          Already Have an account?
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePattern: { width: "100%", height: hp(40) },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
