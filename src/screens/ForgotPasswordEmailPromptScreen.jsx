import { Formik } from "formik";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { BackButton, Header, Input, PrimaryButton } from "../components";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

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
      console.log(email);
      // TODO:send a verification to email address

      navigation.navigate("verification", {
        email: email || "",
        reset: true,
      });
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
        title={"Enter Your Email Address"}
        subtitle={
          "Please enter your Email so we can help you recover your password"
        }
      />

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
              image={require("../../assets/images/Message.png")}
              errors={errors.email}
              touched={touched.email}
              autoCapitalize="none"
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
  );
};

export default ForgotPasswordEmailPromptScreen;

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
