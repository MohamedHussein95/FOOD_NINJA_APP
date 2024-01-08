import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackButton, Header, PrimaryButton } from "../components";
import { Colors } from "../constants";
import { hideCharacters, hp, wp } from "../utils";

const ForgotPasswordScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  const { email, phoneNumber } = route.params || {};

  const EmailView = email ? TouchableOpacity : View;
  const NumberView = phoneNumber ? TouchableOpacity : View;

  const handleNext = () => {
    try {
      // TODO:send an OTP notification to the selected Option

      navigation.navigate("verification", {
        phoneNumber: phoneNumber || "",
        email: email || "",
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
        title={"Forgot password?"}
        subtitle={
          "Select which contact details should we use to reset your password"
        }
      />
      <View style={styles.bodyContainer}>
        <NumberView
          style={[
            styles.optionContainer,
            {
              backgroundColor:
                selectedMethod === "sms"
                  ? Colors.backgroundPrimary
                  : phoneNumber
                  ? Colors.white
                  : Colors.greyScale100,
              borderWidth: selectedMethod === "sms" ? 1 : 0,
              borderColor: selectedMethod === "sms" ? Colors.success : null,
            },
          ]}
          onPress={() => setSelectedMethod("sms")}
        >
          <Ionicons
            name="chatbubble-ellipses"
            size={50}
            color={phoneNumber ? Colors.green_gradient[0] : Colors.greyScale300}
          />

          <View style={styles.optionTopView}>
            <Text style={styles.optionTitle}>Via sms:</Text>
            <Text style={styles.optionText}>
              {hideCharacters(phoneNumber, "end") || "not found"}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.editContainer}
            onPress={() => navigation.navigate("forgot_password_number")}
          >
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </NumberView>
        <EmailView
          style={[
            styles.optionContainer,
            {
              backgroundColor:
                selectedMethod === "email"
                  ? Colors.backgroundPrimary
                  : email
                  ? Colors.white
                  : Colors.greyScale100,
              borderWidth: selectedMethod === "email" ? 1 : 0,
              borderColor: selectedMethod === "email" ? Colors.success : null,
            },
          ]}
          onPress={() => setSelectedMethod("email")}
        >
          <Ionicons
            name="mail"
            size={50}
            color={email ? Colors.green_gradient[0] : Colors.greyScale300}
          />

          <View style={styles.optionTopView}>
            <Text style={styles.optionTitle}>Via email:</Text>
            <Text style={styles.optionText}>
              {hideCharacters(email, "middle") || "not found"}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.editContainer}
            onPress={() => navigation.navigate("forgot_password_email")}
          >
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </EmailView>
      </View>
      <PrimaryButton
        text={"Next"}
        onPress={handleNext}
        styles={{ marginBottom: hp(2) }}
        disabled={selectedMethod.trim().length <= 0}
      />
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  bodyContainer: {
    paddingHorizontal: wp(4),
    flex: 1,
    marginTop: hp(2),
  },
  editText: {
    fontFamily: "regular",
    color: Colors.success,
    fontSize: wp(4.5),
  },
  editContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: wp(2),
  },
  optionTopView: {
    gap: hp(1),
    flex: 1,
  },
  optionText: {
    fontFamily: "inter_bold",
    color: Colors.black300,
    fontSize: wp(4),
    letterSpacing: wp(0.3),
  },
  optionTitle: {
    fontFamily: "regular",
    color: Colors.black100,
    fontSize: wp(5),
  },
  optionContainer: {
    alignItems: "center",
    borderRadius: wp(4),
    height: hp(15),
    marginVertical: hp(2),
    flexDirection: "row",
    gap: wp(4),
    paddingHorizontal: wp(4),
    elevation: 0.3,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: hp(1),
    paddingTop: hp(8),
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.light_white,
  },
});
