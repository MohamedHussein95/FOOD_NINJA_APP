import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import * as Yup from "yup";
import { BackButton, Header, Input, PrimaryButton } from "../components";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "First Name can only contain letters")
    .min(2, "First Name must be at least 2 characters")
    .max(50, "First Name can't be longer than 50 characters")
    .required()
    .label("First Name"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Last Name can only contain letters")
    .min(2, "Last Name must be at least 2 characters")
    .max(50, "Last Name can't be longer than 50 characters")
    .required()
    .label("Last Name"),
  phoneNumber: Yup.string()
    .matches(/^\+[1-9]\d{1,14}$/, "Invalid phone number")
    .required()
    .label("Phone Number"),
});

const SetupAccountScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);
  const phoneInput = useRef(null);

  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleSubmitValues = async (firstName, lastName, phoneNumber) => {
    try {
      setLoading(true);
      setPhoneNumberError("");
      if (!phoneNumber) {
        setPhoneNumberError("Phone number is required");
        return;
      }
      const checkValid = phoneInput.current?.isValidNumber(phoneNumber);
      // if (!checkValid) {
      //   setPhoneNumberError("Invalid phone number");
      //   return;
      // }
      navigation.navigate("verification");
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: hp(1),
        paddingTop: hp(8),
      }}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <BackButton
        title={"Fill in your bio to get started"}
        subtitle={
          "This data will be displayed in your account profile for security"
        }
      />

      <Formik
        initialValues={{
          firstName: "Mohamed",
          lastName: "Abdikafi",
          phoneNumber: "712345678",
        }}
        onSubmit={(values) =>
          handleSubmitValues(
            values.firstName,
            values.lastName,
            values.phoneNumber
          )
        }
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
            style={{
              gap: 12,
              flex: 1,
              flexGrow: 1,
              marginTop: hp(5),
              paddingHorizontal: wp(4),
            }}
          >
            <Input
              name="firstName"
              placeholder="First Name"
              onChangeText={handleChange("firstName")}
              onBlur={(e) => {
                handleBlur("firstName")(e);
                setFirstNameFocused(false);
              }}
              active={firstNameFocused}
              onFocus={() => setFirstNameFocused(true)}
              value={values.firstName}
              autoComplete="name"
              errors={errors.firstName}
              touched={touched.firstName}
              autoCapitalize="words"
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              onChangeText={handleChange("lastName")}
              onBlur={(e) => {
                handleBlur("lastName")(e);
                setFirstNameFocused(false);
              }}
              active={lastNameFocused}
              onFocus={() => setLastNameFocused(true)}
              value={values.lastName}
              autoComplete="name"
              errors={errors.lastName}
              touched={touched.lastName}
              autoCapitalize="words"
            />
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

export default SetupAccountScreen;

const styles = StyleSheet.create({
  screen: {
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
  imagePattern: { width: "100%", height: hp(30) },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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
