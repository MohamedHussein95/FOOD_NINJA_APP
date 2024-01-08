import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, logoStyles } from ".././constants";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { PrimaryButton } from "../components";
import colors from "../constants/colors";
import { hp, wp } from "../utils";

const SignUpSuccessScreen = ({ navigation }) => {
  const handleNext = () => {
    try {
      // TODO:take user to home screen and dont show this screen again
      navigation.navigate("tab");
    } catch (error) {}
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Pattern.png")}
          style={styles.imagePattern}
          contentFit="cover"
        />
        <LinearGradient
          colors={["transparent", colors.white]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.linearGradientImage}
        />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/success.png")}
          style={logoStyles.logo}
          contentFit="contain"
        />
        <MaskedView
          style={[logoStyles.maskedContainer, { marginTop: hp(1) }]}
          maskElement={
            <View style={styles.maskedContainer}>
              <Text
                style={[
                  logoStyles.appName,
                  { fontSize: wp(10), fontFamily: "bold" },
                ]}
              >
                Congrats!
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
        <Text style={styles.subText}>You Profile Is Ready To Use</Text>
      </View>
      <PrimaryButton
        text={"Try Order"}
        onPress={handleNext}
        styles={{ marginBottom: hp(2) }}
      />
    </View>
  );
};

export default SignUpSuccessScreen;

const styles = StyleSheet.create({
  subText: {
    fontFamily: "bold",
    fontSize: wp(6),
  },
  maskedContainer: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradientImage: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "20%",
  },
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
