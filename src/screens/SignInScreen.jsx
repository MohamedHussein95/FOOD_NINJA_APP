import MaskedView from "@react-native-masked-view/masked-view";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import { appDescription, appName, logoStyles } from ".././constants";
import { Input, PrimaryButton } from "../components/";
import { Colors } from "../constants";
import { getStoredValues, hp, wp } from "../utils";

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
});

const SignInScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmitValues = async (email, password) => {
    try {
      setLoading(true);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    (async function () {
      const { email, password, phoneNumber } = await getStoredValues([
        "email",
        "password",
        "phoneNumber",
      ]);

      setEmail(email);
      setPassword(password);
      setPhoneNumber(phoneNumber);
    })();
  }, []);

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Pattern.png")}
          style={styles.imagePattern}
          contentFit="cover"
        />
        <LinearGradient
          colors={["transparent", Colors.light_white]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.linearGradientImage}
        />
      </View>

      <View style={[styles.logoContainer, { marginTop: hp(1) }]}>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={logoStyles.logo}
          contentFit="contain"
        />
        <MaskedView
          style={logoStyles.maskedContainer}
          maskElement={
            <View style={styles.container}>
              <Text style={logoStyles.appName}>{appName}</Text>
            </View>
          }
        >
          <LinearGradient
            colors={Colors.green_gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linearGradientMask}
          />
        </MaskedView>
        <Text style={logoStyles.appDescription}>{appDescription}</Text>
      </View>
      <Text style={styles.screenTitle}>Login To Your Account</Text>
      <Formik
        initialValues={{ email, password }}
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
          <View style={styles.formik}>
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
              secureTextEntry={true}
              errors={errors.password}
              touched={touched.password}
              inputMode="text"
              autoComplete="password-new"
            />
            <TouchableOpacity
              style={{ alignItems: "flex-end" }}
              onPress={() => navigation.navigate("forgot_password")}
            >
              <MaskedView
                style={styles.forgotMaskContainer}
                maskElement={
                  <View style={styles.forgotMask}>
                    <Text style={styles.forgotText}>Forgot Your Password?</Text>
                  </View>
                }
              >
                <LinearGradient
                  colors={Colors.green_gradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.linearText}
                />
              </MaskedView>
            </TouchableOpacity>
            <Text style={styles.orText}>Or Continue With</Text>

            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.social}>
                <Image
                  source={require("../../assets/images/facebook.png")}
                  style={styles.socialImage}
                  contentFit="contain"
                />
                <Text style={styles.socialText}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.social}>
                <Image
                  source={require("../../assets/images/google.png")}
                  style={styles.socialImage}
                  contentFit="contain"
                />
                <Text style={styles.socialText}>Google</Text>
              </TouchableOpacity>
            </View>

            <PrimaryButton
              text={"Login"}
              onPress={() =>
                navigation.navigate("forgot_password", { email, phoneNumber })
              }
              styles={{ marginBottom: hp(2) }}
            />
          </View>
        )}
      </Formik>
      <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
        <MaskedView
          style={styles.forgotMaskContainer}
          maskElement={
            <View sstyle={styles.forgotMask}>
              <Text style={styles.forgotText}>Don't have an account?</Text>
            </View>
          }
        >
          <LinearGradient
            colors={Colors.green_gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linearText}
          />
        </MaskedView>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  socialImage: {
    width: hp(4),
    aspectRatio: 1,
  },
  socialText: {
    fontFamily: "bold",
    fontSize: wp(4),
    letterSpacing: 0.5,
    textAlign: "center",
    marginVertical: hp(4),
  },
  social: {
    backgroundColor: Colors.white,
    borderRadius: wp(4),
    borderWidth: 1,
    borderColor: Colors.greyScale200,
    elevation: 0.1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 13,
    width: wp(45),
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
    flex: 1,
  },
  orText: {
    fontFamily: "bold",
    fontSize: wp(4),
    letterSpacing: 0.5,
    textAlign: "center",
    marginVertical: hp(1),
  },
  linearText: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  forgotMaskContainer: {
    width: "100%",
    height: 28,
  },
  forgotMask: {
    width: "100%",
    height: "100%",
  },
  forgotText: {
    fontFamily: "medium",
    fontSize: wp(3.5),
    letterSpacing: 0.5,
    textDecorationLine: "underline",
    textAlign: "center",
    color: Colors.success,
  },
  formik: {
    paddingHorizontal: wp(4),
    gap: 12,
    flex: 1,
    flexGrow: 1,
  },
  screenTitle: {
    fontFamily: "bold",
    fontSize: wp(5),
    letterSpacing: 0.5,
    textAlign: "center",
    marginVertical: hp(5),
  },
  linearGradientMask: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradientImage: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%",
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: hp(1),
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.light_white,
  },
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
