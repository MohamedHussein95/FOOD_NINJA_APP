import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PrimaryButton } from "../components";
import { Colors } from "../constants";
import { hideCharacters, hp, wp } from "../utils";

const ForgotPasswordScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  const { email, phoneNumber } = route.params || {};

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
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Pattern_diagnol.png")}
          style={styles.imagePattern}
          resizeMode="cover"
        />
      </View>

      <View style={{ paddingHorizontal: wp(4), flex: 1 }}>
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
          <Octicons name="chevron-left" size={30} color={Colors.secondary400} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "bold",
            fontSize: wp(7),
            lineHeight: hp(4),
            marginVertical: hp(4),
          }}
        >
          Forgot password?
        </Text>
        <Text
          style={{
            fontFamily: "book",
            fontSize: wp(4),
            lineHeight: hp(3),
            marginVertical: hp(0),
          }}
        >
          Select which contact details should we use to reset your password
        </Text>

        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor:
              selectedMethod === "sms"
                ? Colors.backgroundPrimary
                : Colors.white,
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
          <Image
            source={require("../../assets/images/Message_f.png")}
            style={styles.image}
            resizeMode="contain"
          />
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
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor:
              selectedMethod === "email"
                ? Colors.backgroundPrimary
                : Colors.white,
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
          <Image
            source={require("../../assets/images/Email_f.png")}
            style={styles.image}
            resizeMode="contain"
          />
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
        </TouchableOpacity>
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
  },
  image: { aspectRatio: 1, width: wp(10) },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
