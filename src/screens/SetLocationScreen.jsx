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
import { hp, wp } from "../utils";

const SetLocationScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("California State,Simba Flat");

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
          onPress={() => {}}
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
          Set Your Location
        </Text>
        <Text
          style={{
            fontFamily: "book",
            fontSize: wp(4),
            lineHeight: hp(3),
            marginVertical: hp(0),
          }}
        >
          This data will be displayed in your account profile for security
        </Text>

        <View
          style={{
            backgroundColor: Colors.white,
            padding: wp(4),
            borderRadius: wp(4),
            height: hp(20),
            gap: hp(4),
            marginVertical: hp(2),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: wp(3),
            }}
          >
            <Image
              source={require("../../assets/images/Pin_Logo.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <Text
              style={{ fontFamily: "medium", fontSize: wp(4) }}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {location.trim().length <= 0 ? "Your Location" : location}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.light_white,
              padding: wp(4),
              borderRadius: wp(4),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "bold", fontSize: wp(4) }}>
              Set Location
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <PrimaryButton
        text={"Next"}
        onPress={() => navigation.navigate("signUp_success")}
        styles={{ marginBottom: hp(2) }}
        disabled={location.trim().length <= 0}
      />
    </ScrollView>
  );
};

export default SetLocationScreen;

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
