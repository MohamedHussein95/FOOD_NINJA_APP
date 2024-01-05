import OTPInputView from "@twotalltotems/react-native-otp-input";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BackButton, Header, PrimaryButton } from "../components";
import { Colors } from "../constants";
import { hideCharacters, hp, wp } from "../utils";

const VerificationScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(59);

  const { email, phoneNumber, reset } = route.params || {};

  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const displayTime = () => {
    //const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const formattedSec = sec < 10 ? `0${sec}` : sec;
    return `${formattedSec}`;
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
      <BackButton title={"Enter 4-digit Verification Code"} />

      <View style={{ paddingHorizontal: wp(4), flex: 1 }}>
        <Text
          style={{
            fontFamily: "book",
            fontSize: wp(4),
            lineHeight: hp(3),
            marginVertical: hp(0),
          }}
        >
          Code sent to{" "}
          {phoneNumber
            ? hideCharacters(phoneNumber, "end")
            : email
            ? hideCharacters(email, "middle")
            : "Not found"}{" "}
          . This code will expire in{" "}
          {seconds === 0 ? (
            <Text onPress={() => setSeconds(59)} style={styles.timerText}>
              Resend
            </Text>
          ) : (
            <Text style={styles.content}>
              <Text style={styles.timerText}>{displayTime()}</Text> s
            </Text>
          )}
        </Text>
        <View
          style={{
            backgroundColor: Colors.white,
            elevation: 0.3,
            borderRadius: wp(4),
            height: hp(15),
            justifyContent: "center",
            alignItems: "center",
            marginTop: hp(5),
            paddingHorizontal: wp(4),
          }}
        >
          <OTPInputView
            style={{ width: "100%", height: "100%" }}
            pinCount={4}
            code={code}
            onCodeChanged={(code) => setCode(code)}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
      </View>

      <PrimaryButton
        text={"Next"}
        onPress={() => {
          if (reset) {
            navigation.navigate("reset");
          } else {
            navigation.navigate("payment");
          }
        }}
        styles={{ marginBottom: hp(2) }}
        disabled={code.trim().length <= 3}
      />
    </ScrollView>
  );
};

export default VerificationScreen;

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
  inputContainer: {
    marginVertical: hp(5),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    backgroundColor: Colors.white,
    borderRadius: wp(4),
    height: hp(15),
    elevation: 0.3,
    paddingHorizontal: wp(4),
  },
  otpBox: {
    justifyContent: "center",
    alignItems: "center",
    width: wp(20),
  },
  otpText: {
    fontSize: wp(8),
    fontFamily: "medium",
    textAlign: "center",
    padding: wp(0),
  },
  timerText: {
    fontSize: wp(4),
    fontFamily: "bold",
    color: Colors.primary400,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: Colors.primary100,
  },

  underlineStyleBase: {
    borderWidth: 0,
    borderBottomWidth: 1,
    fontFamily: "medium",
    fontSize: wp(7),
    color: Colors.black300,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.primary100,
  },
});
