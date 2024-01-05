import MaskedView from "@react-native-masked-view/masked-view";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
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

const SignInScreen = () => {
  const [loading, setLoading] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigation = useNavigation();

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

      <View style={[styles.logoContainer, { marginTop: hp(1) }]}>
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
        Login To Your Account
      </Text>
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
          <View
            style={{ paddingHorizontal: wp(4), gap: 12, flex: 1, flexGrow: 1 }}
          >
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
                style={{
                  width: "100%",
                  height: 28,
                }}
                maskElement={
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
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
                      Forgot Your Password?
                    </Text>
                  </View>
                }
              >
                <LinearGradient
                  colors={Colors.green_gradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </MaskedView>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "bold",
                fontSize: wp(4),
                letterSpacing: 0.5,
                textAlign: "center",
                marginVertical: hp(1),
              }}
            >
              Or Continue With
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexGrow: 1,
                flex: 1,
              }}
            >
              <TouchableOpacity
                style={{
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
                }}
              >
                <Image
                  source={require("../../assets/images/facebook.png")}
                  style={{ width: hp(4), aspectRatio: 1 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: "bold",
                    fontSize: wp(4),
                    letterSpacing: 0.5,
                    textAlign: "center",
                    marginVertical: hp(4),
                  }}
                >
                  Facebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
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
                }}
              >
                <Image
                  source={require("../../assets/images/google.png")}
                  style={{ width: hp(4), aspectRatio: 1 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: "bold",
                    fontSize: wp(4),
                    letterSpacing: 0.5,
                    textAlign: "center",
                    marginVertical: hp(4),
                  }}
                >
                  Google
                </Text>
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
      <TouchableOpacity
        style={{}}
        onPress={() => navigation.navigate("signUp")}
      >
        <MaskedView
          style={{
            width: "100%",
            height: 28,
          }}
          maskElement={
            <View
              style={{
                width: "100%",
                height: "100%",
              }}
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
                Don't have an account?
              </Text>
            </View>
          }
        >
          <LinearGradient
            colors={Colors.green_gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </MaskedView>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignInScreen;

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
