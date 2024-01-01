import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors, appDescription, appName } from ".././constants";

import { LinearGradient } from "expo-linear-gradient";

import MaskedView from "@react-native-masked-view/masked-view";

import colors from "../constants/colors";
import { hp } from "../utils";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    let timeOut;

    timeOut = setTimeout(() => {
      navigation.navigate("Onboarding");
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Pattern.png")}
          style={styles.imagePattern}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", colors.white]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "50%",
          }}
        />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={{ height: hp(25), aspectRatio: 1 }}
          resizeMode="contain"
        />
        <MaskedView
          style={{
            height: hp(7.5),
            flexDirection: "row",
            backgroundColor: "red",
          }}
          maskElement={
            <View
              style={{
                backgroundColor: "transparent",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "viga_regular",
                  fontSize: hp(6),
                  letterSpacing: 0.5,
                }}
              >
                {appName}
              </Text>
            </View>
          }
        >
          <LinearGradient
            colors={colors.green_gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </MaskedView>
        <Text
          style={{
            fontFamily: "inter_semiBold",
            fontSize: hp(2),
            letterSpacing: 1,
            marginTop: hp(0.2),
          }}
        >
          {appDescription}
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePattern: { width: "100%", height: hp(40) },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
