import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { Colors, appDescription, appName, logoStyles } from ".././constants";
import colors from "../constants/colors";
import { SET_DID_TRY_AUTO_LOGIN } from "../store/authSlice";
import { hp } from "../utils";

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      try {
        // const storedAuthInfo = await SecureStore.getItemAsync("userData");

        // if (storedAuthInfo == null) {
        //   dispatch(SET_DID_TRY_AUTO_LOGIN());
        //   console.log("no user data");
        //   return;
        // }

        // const parsedData = JSON.parse(storedAuthInfo);
        // const { token, uid, expiryDate: expiryDateString } = parsedData;

        // const expiryDate = new Date(expiryDateString);
        // if (expiryDate <= new Date() || !token || !uid) {
        //   dispatch(SET_DID_TRY_AUTO_LOGIN());
        //   return;
        // }

        // auth.onAuthStateChanged(async (user) => {
        //   if (user) {
        //     try {
        //       const userDoc = await getUserDataFromFireStore(user.uid);
        //       await updateUserStatus("Online", uid);
        //       dispatch(
        //         AUTHENTICATE({
        //           ...userDoc,
        //           token,
        //         })
        //       );
        //     } catch (error) {
        //       dispatch(SET_DID_TRY_AUTO_LOGIN());
        //     }
        //   } else {
        //     dispatch(SET_DID_TRY_AUTO_LOGIN());
        //   }
        // });
        dispatch(SET_DID_TRY_AUTO_LOGIN());
      } catch (error) {
        console.log(error);
        dispatch(SET_DID_TRY_AUTO_LOGIN());
      }
    };

    tryLogin();
  }, [dispatch]);

  // TODO:retreive the stored USER data

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
          style={styles.linearGradientImageTop}
        />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={logoStyles.logo}
          resizeMode="contain"
        />
        <MaskedView
          style={logoStyles.maskedContainer}
          maskElement={
            <View style={styles.container2}>
              <Text style={logoStyles.appName}>{appName}</Text>
            </View>
          }
        >
          <LinearGradient
            colors={colors.green_gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linearGradient}
          />
        </MaskedView>
        <Text style={logoStyles.appDescription}>{appDescription}</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  linearGradientImageTop: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%",
  },
  linearGradient: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
