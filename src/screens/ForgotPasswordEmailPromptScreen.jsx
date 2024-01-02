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
import { Octicons } from "@expo/vector-icons";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required")
    .label("Email")
    .test("email", "Invalid email address", (value) => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
    }),
});

const ForgotPasswordEmailPromptScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const handleSendOtp = async (email) => {
    try {
      navigation.navigate("verification_email", {
        userContacts: {
          email: email || "",
        },
      });
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
            Enter Your Email Address
          </Text>
          <Text
            style={{
              fontFamily: "book",
              fontSize: wp(4),
              lineHeight: hp(3),
              marginVertical: hp(0),
            }}
          >
            Please enter your Email so we can help you recover your password
          </Text>
        </View>

        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSendOtp(values.email)}
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

export default ForgotPasswordEmailPromptScreen;

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
