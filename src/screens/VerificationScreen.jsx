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
    const sec = seconds % 60;
    const formattedSec = sec < 10 ? `0${sec}` : sec;
    return `${formattedSec}`;
  };

  const handleVerification = () => {
    try {
      setLoading(true);
      // TODO:  handle verification
      if (reset) {
        navigation.navigate("reset");
      } else {
        navigation.navigate("payment");
      }
    } catch (error) {}
  };
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <BackButton title={"Enter 4-digit Verification Code"} />

      <View style={styles.bodyContainer}>
        <Text style={styles.methodText}>
          Code sent to{"  "}
          <Text style={{ color: Colors.success }}>
            {phoneNumber
              ? hideCharacters(phoneNumber, "end")
              : email
              ? hideCharacters(email, "middle")
              : "Not found"}
          </Text>{" "}
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
        <View style={styles.otpWrapper}>
          <OTPInputView
            style={styles.otpView}
            pinCount={4}
            code={code}
            onCodeChanged={(code) => setCode(code)}
            autoFocusOnLoad
            codeInputFieldStyle={styles.otpBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
      </View>

      <PrimaryButton
        text={"Next"}
        onPress={handleVerification}
        styles={{ marginBottom: hp(2) }}
        disabled={code.trim().length <= 3}
      />
    </ScrollView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  otpView: {
    width: "100%",
    height: "100%",
  },
  otpWrapper: {
    backgroundColor: Colors.white,
    elevation: 0.3,
    borderRadius: wp(4),
    height: hp(15),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(5),
    paddingHorizontal: wp(4),
  },
  methodText: {
    fontFamily: "book",
    fontSize: wp(4),
    lineHeight: hp(3),
    marginVertical: hp(0),
  },
  bodyContainer: {
    paddingHorizontal: wp(4),
    flex: 1,
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

  timerText: {
    fontSize: wp(4),
    fontFamily: "bold",
    color: Colors.success,
  },

  otpBase: {
    borderWidth: 0,
    borderBottomWidth: 1,
    fontFamily: "medium",
    fontSize: wp(7),
    color: Colors.black300,
  },
  underlineStyleHighLighted: {
    borderColor: Colors.success,
  },
});
