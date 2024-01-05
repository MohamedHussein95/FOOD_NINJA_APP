import { Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
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

  return (
    <>
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
          title={"Forgot password?"}
          subtitle={
            "Select which contact details should we use to reset your password"
          }
        />
        <View style={{ paddingHorizontal: wp(4), flex: 1 }}>
          <EmailView
            style={{
              alignItems: "center",
              backgroundColor:
                selectedMethod === "sms"
                  ? Colors.backgroundPrimary
                  : phoneNumber
                  ? Colors.white
                  : Colors.greyScale100,
              borderWidth: selectedMethod === "sms" ? 1 : 0,
              borderColor: selectedMethod === "sms" ? Colors.success : null,
              borderRadius: wp(4),
              height: hp(15),
              marginVertical: hp(2),
              flexDirection: "row",
              gap: wp(4),
              paddingHorizontal: wp(4),
              elevation: 0.3,
            }}
            onPress={() => setSelectedMethod("sms")}
          >
            <MaskedView
              style={{
                width: 50,
                aspectRatio: 1,
              }}
              maskElement={
                <Ionicons
                  name="chatbubble-ellipses"
                  size={50}
                  color={Colors.success}
                />
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

            <View style={{ gap: hp(1), flex: 1 }}>
              <Text
                style={{
                  fontFamily: "regular",
                  color: Colors.black100,
                  fontSize: wp(5),
                }}
              >
                Via sms:
              </Text>
              <Text
                style={{
                  fontFamily: "inter_bold",
                  color: Colors.black300,
                  fontSize: wp(4),
                  letterSpacing: wp(0.3),
                }}
              >
                {hideCharacters(phoneNumber, "end") || "not found"}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                padding: wp(2),
              }}
              onPress={() => navigation.navigate("forgot_password_number")}
            >
              <Text
                style={{
                  fontFamily: "regular",
                  color: Colors.success,
                  fontSize: wp(4.5),
                }}
              >
                Edit
              </Text>
            </TouchableOpacity>
          </EmailView>
          <NumberView
            style={{
              alignItems: "center",
              backgroundColor:
                selectedMethod === "email"
                  ? Colors.backgroundPrimary
                  : email
                  ? Colors.white
                  : Colors.greyScale100,
              borderWidth: selectedMethod === "email" ? 1 : 0,
              borderColor: selectedMethod === "email" ? Colors.success : null,
              borderRadius: wp(4),
              height: hp(15),
              marginVertical: hp(2),
              flexDirection: "row",
              gap: wp(4),
              paddingHorizontal: wp(4),
              elevation: 0.3,
            }}
            onPress={() => setSelectedMethod("email")}
          >
            <MaskedView
              style={{
                width: 50,
                aspectRatio: 1,
              }}
              maskElement={
                <Ionicons name="mail" size={50} color={Colors.success} />
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
            <View style={{ gap: hp(1), flex: 1 }}>
              <Text
                style={{
                  fontFamily: "regular",
                  color: Colors.black100,
                  fontSize: wp(5),
                }}
              >
                Via email:
              </Text>
              <Text
                style={{
                  fontFamily: "inter_bold",
                  color: Colors.black300,
                  fontSize: wp(4),
                  letterSpacing: wp(0.3),
                }}
              >
                {hideCharacters(email, "middle") || "not found"}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                padding: wp(2),
              }}
              onPress={() => navigation.navigate("forgot_password_email")}
            >
              <Text
                style={{
                  fontFamily: "regular",
                  color: Colors.success,
                  fontSize: wp(4.5),
                }}
              >
                Edit
              </Text>
            </TouchableOpacity>
          </NumberView>
        </View>
        <PrimaryButton
          text={"Next"}
          onPress={() =>
            navigation.navigate(
              selectedOption === "sms" ? "verification" : "verification_email",
              {
                userContacts: {
                  phoneNumber: phoneNumber || "",
                  email: email || "",
                },
              }
            )
          }
          styles={{ marginBottom: hp(2) }}
          disabled={selectedMethod.trim().length <= 0}
        />
      </ScrollView>
    </>
  );
};

export default ForgotPasswordScreen;

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
    flexDirection: "row",
  },
  image: { aspectRatio: 2, width: "100%" },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
