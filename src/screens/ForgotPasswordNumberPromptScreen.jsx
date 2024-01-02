import React, { useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { Formik } from "formik";
import * as Yup from "yup";
import { hp, wp } from "../utils";
import { Colors } from "../constants";
import { Input, PrimaryButton } from "../components";
import { Octicons } from "@expo/vector-icons";

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
            Enter Your Phone Number
          </Text>
          <Text
            style={{
              fontFamily: "book",
              fontSize: wp(4),
              lineHeight: hp(3),
              marginVertical: hp(0),
            }}
          >
            Please enter your Phone Number so we can help you recover your
            password
          </Text>
        </View>

        <Formik
          initialValues={{
            phoneNumber: "",
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
    </View>
  );
};

export default ForgotPasswordNumberPromptScreen;

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
  imageContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePattern: { width: "100%", height: hp(30) },
});
