import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackButton, Header, PrimaryButton } from "../components";
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
      <Header />
      <BackButton
        title={"Set Your Location"}
        subtitle={
          "This data will be displayed in your account profile for security"
        }
      />

      <View style={{ paddingHorizontal: wp(4), flex: 1 }}>
        <View
          style={{
            backgroundColor: Colors.white,
            padding: wp(4),
            borderRadius: wp(4),
            height: hp(20),
            gap: hp(4),
            marginVertical: hp(2),
            elevation: 1,
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
              backgroundColor: Colors.greyScale100,
              padding: wp(4),
              borderRadius: wp(4),
              justifyContent: "center",
              alignItems: "center",
              elevation: 1,
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
