import { Feather } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { Colors } from ".././constants";
import { Input, PrimaryButton } from "../components";
import colors from "../constants/colors";
import { hp, wp } from "../utils";

const STAR_IMAGE = require("../../assets/images/Star.png");

const RatingScreen = ({ navigation, route }) => {
  const { user, status } = route.params || {};
  const [feedback, setFeedback] = useState("");
  const [feedbackFocused, setFeedbackFocused] = useState(false);
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
            height: "40%",
          }}
        />
      </View>

      <View
        style={{
          borderRadius: hp(50),
          overflow: "hidden",
          borderWidth: wp(1),
          borderColor: Colors.success,
          marginBottom: hp(5),
        }}
      >
        <Image
          source={require("../../assets/images/chat_2.png")}
          resizeMode="contain"
          style={{ height: hp(20), aspectRatio: 1 }}
        />
      </View>
      <View
        style={{
          gap: hp(2),
          alignItems: "center",
          width: "70%",
        }}
      >
        <Text
          style={{
            fontFamily: "bold",
            fontSize: wp(7),
            textAlign: "center",
            lineHeight: hp(5),
          }}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          Thank you! Order Completed
        </Text>

        <Text
          style={{
            fontFamily: "regular",
            fontSize: wp(4),
            color: Colors.black100,
            textAlign: "center",
          }}
        >
          Please rate you last Driver
        </Text>
      </View>
      <AirbnbRating
        type="rocket"
        ratingContainerStyle={{ marginTop: hp(5) }}
        starContainerStyle={{
          gap: wp(4),
        }}
        size={25}
        showRating={false}
        unSelectedColor={Colors.greyScale100}
        starImage={STAR_IMAGE}
      />
      <View
        style={{
          width: "100%",
          paddingHorizontal: wp(4),
          position: "absolute",
          bottom: 20,
          gap: hp(3),
        }}
      >
        <Input
          placeholder="Leave feedback"
          onChangeText={setFeedback}
          onBlur={(e) => setFeedbackFocused(false)}
          active={feedbackFocused}
          onFocus={() => setFeedbackFocused(true)}
          value={feedback}
          IconPack={Feather}
          icon={"edit"}
          color={Colors.green_gradient[0]}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <PrimaryButton text={"Submit"} onPress={() => {}} />
          <TouchableOpacity
            style={{
              backgroundColor: Colors.white,
              padding: wp(2),
              borderRadius: wp(2),
              justifyContent: "center",
              alignItems: "center",
              height: hp(8),
              width: wp(30),
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("tab")}
          >
            <MaskedView
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
              }}
              maskElement={
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: wp(5),
                      fontFamily: "bold",
                      textAlign: "center",
                    }}
                  >
                    Skip
                  </Text>
                </View>
              }
            >
              <LinearGradient
                colors={Colors.green_gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </MaskedView>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RatingScreen;

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
