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

  const handleNext = () => {
    try {
      // TODO:Create the user here with all the data available
      navigation.navigate("signUp_success");
    } catch (error) {}
  };

  const getLocation = () => {
    try {
      // TODO:get the location and then set the location
    } catch (error) {}
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <BackButton
        title={"Set Your Location"}
        subtitle={
          "This data will be displayed in your account profile for security"
        }
      />

      <View style={styles.bodyContainer}>
        <View style={styles.locationContainer}>
          <View style={styles.topViewRow}>
            <Image
              source={require("../../assets/images/Pin_Logo.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <Text
              style={styles.location}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {location.trim().length <= 0 ? "Your Location" : location}
            </Text>
          </View>
          <TouchableOpacity style={styles.setButton} onPress={getLocation}>
            <Text style={styles.setButtonText}>Set Location</Text>
          </TouchableOpacity>
        </View>
      </View>
      <PrimaryButton
        text={"Next"}
        onPress={handleNext}
        styles={{ marginBottom: hp(2) }}
        disabled={location.trim().length <= 0}
      />
    </ScrollView>
  );
};

export default SetLocationScreen;

const styles = StyleSheet.create({
  setButtonText: {
    fontFamily: "bold",
    fontSize: wp(4),
  },
  setButton: {
    backgroundColor: Colors.greyScale100,
    padding: wp(4),
    borderRadius: wp(4),
    justifyContent: "center",
    alignItems: "center",
    elevation: 0.3,
  },
  location: {
    fontFamily: "medium",
    fontSize: wp(4),
  },
  topViewRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(3),
  },
  locationContainer: {
    backgroundColor: Colors.white,
    padding: wp(4),
    borderRadius: wp(4),
    height: hp(20),
    gap: hp(4),
    marginVertical: hp(2),
    elevation: 1,
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
  image: { aspectRatio: 1, width: wp(10) },
});
