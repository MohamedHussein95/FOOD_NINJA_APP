import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from ".././constants";

import colors from "../constants/colors";
import { hp, wp } from "../utils";

const CallScreen = ({ navigation, route }) => {
  const { user } = route.params || {};
  const [volumeOn, setVolumeOn] = useState(true);
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
            height: "20%",
          }}
        />
      </View>
      <View
        style={{
          borderRadius: hp(50),
          overflow: "hidden",
          borderWidth: wp(1),
          borderColor: Colors.success,
          marginBottom: hp(10),
        }}
      >
        <Image
          source={user.image}
          resizeMode="contain"
          style={{ height: hp(20), aspectRatio: 1 }}
        />
      </View>
      <View
        style={{
          gap: hp(2),
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "bold",
            fontSize: wp(7),
          }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {user.fullName}
        </Text>

        <Text
          style={{
            fontFamily: "regular",
            fontSize: wp(5),
            color: Colors.black100,
          }}
        >
          Ringing...
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          justifyContent: "center",
          bottom: 50,
          width: "100%",
          gap: wp(10),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setVolumeOn(!volumeOn)}
        >
          <LinearGradient
            colors={Colors.light_green_gradient}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: hp(50),
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              width: wp(19),
              aspectRatio: 1,
            }}
          >
            <Ionicons
              name={volumeOn ? "volume-medium" : "volume-mute"}
              size={hp(4)}
              color={Colors.success}
            />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: Colors.red,
            borderRadius: hp(50),
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            width: wp(19),
            aspectRatio: 1,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={hp(3)} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CallScreen;

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
