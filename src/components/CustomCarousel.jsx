import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Colors } from "../constants";
import { DEVICE_WIDTH, hp, wp } from "../utils";

const PROMOTIONS = [
  {
    id: "1",
    image: require("../../assets/images/ice_cream.png"),
    title: "Special Deal For January",
  },
];

const CustomCarousel = () => {
  return (
    <Carousel
      loop
      pagingEnabled
      width={DEVICE_WIDTH}
      height={DEVICE_WIDTH / 2}
      autoPlay={true}
      mode="parallax"
      data={PROMOTIONS}
      snapEnabled
      scrollAnimationDuration={3000}
      renderItem={({ item, index }) => {
        return (
          <ImageBackground
            source={require("../../assets/images/advertising_bg.png")}
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              overflow: "hidden",
              elevation: 1,
              borderRadius: wp(5),
              flexDirection: "row",
              height: hp(25),
            }}
          >
            <Image
              source={item.image}
              resizeMode="cover"
              style={{
                position: "absolute",
                left: 0,
                height: "100%",
                width: wp(100),
              }}
            />
            <View
              style={{
                width: "60%",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                gap: hp(3),
              }}
            >
              <Text
                style={{
                  fontFamily: "bold",
                  fontSize: wp(7),
                  color: Colors.white,
                  lineHeight: hp(5),
                  marginHorizontal: wp(5),
                }}
              >
                {item.title}
              </Text>
              <View
                style={{
                  width: "100%",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.white,
                    padding: wp(2),
                    borderRadius: wp(2),
                    width: wp(35),
                    justifyContent: "center",
                    alignItems: "center",
                    height: hp(8),
                    marginHorizontal: wp(10),
                  }}
                  activeOpacity={0.8}
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
                          Buy Now
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
          </ImageBackground>
        );
      }}
    />
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({});
