import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import * as Yup from "yup";
import { BackButton, Header, PrimaryButton } from "../components";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^\+[1-9]\d{1,14}$/, "Invalid phone number")
    .required()
    .label("Phone Number"),
});

const ForgotPasswordNumberPromptScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const phoneInput = useRef(null);
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleSendOtp = async (phoneNumber) => {
    try {
      const checkValid = phoneInput.current?.isValidNumber(phoneNumber);

      if (!checkValid) {
        setPhoneNumberError("Invalid phone number");
        return;
      }

      // TODO:send a verification to phone number

      navigation.navigate("verification", {
        phoneNumber: phoneNumber || "",
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
        title={"Enter Your Phone Number"}
        subtitle={
          "Please enter your Phone Number so we can help you recover your password"
        }
      />

      <Formik
        initialValues={{
          phoneNumber: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSendOtp(values.phoneNumber)}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={styles.formik}>
            <PhoneInput
              ref={phoneInput}
              defaultValue={values.phoneNumber}
              defaultCode="KE"
              layout="first"
              value={values.phoneNumber}
              onChangeFormattedText={(text) => {
                handleChange("phoneNumber")(text);
              }}
              containerStyle={[styles.phoneContainer, {}]}
              textContainerStyle={styles.phoneTextContainer}
              textInputStyle={styles.phoneText}
              codeTextStyle={styles.phoneText}
              placeholder="Mobile Number"
            />
            {phoneNumberError ? (
              <View style={[styles.errorContainer]}>
                <Text style={[styles.errorText]}>{phoneNumberError}</Text>
              </View>
            ) : errors.phoneNumber && touched.phoneNumber ? (
              <View style={[styles.errorContainer]}>
                <Text style={[styles.errorText]}>{errors.phoneNumber}</Text>
              </View>
            ) : null}
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

export default ForgotPasswordNumberPromptScreen;

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

  phoneContainer: {
    width: "100%",
    backgroundColor: Colors.white,
    height: hp(8),
    borderWidth: 1,
    borderColor: Colors.greyScale200,
    borderRadius: wp(4),
    elevation: 0.2,
    shadowColor: Colors.primary400,
    shadowOpacity: 0.3,
    shadowRadius: wp(4),
    shadowOffset: {
      width: 0.3,
      height: 0.3,
    },
  },
  phoneTextContainer: {
    borderRadius: wp(3),
    backgroundColor: Colors.white,
  },
  phoneText: {
    fontFamily: "regular",
    fontSize: wp(4),
  },
  errorText: { color: Colors.red },
  errorContainer: { width: "100%" },
});
