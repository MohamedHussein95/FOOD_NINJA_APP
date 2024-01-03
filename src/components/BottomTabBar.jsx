import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../constants";
import { hp, wp } from "../utils/";

const BottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        marginBottom: hp(1),
        borderRadius: wp(6),
        paddingHorizontal: wp(4),
        height: hp(10),
        elevation: 0.1,
        position: "absolute",
        bottom: 0,
        width: "95%",
        alignSelf: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        let iconName = null;

        if (route.name === "home") {
          iconName = isFocused ? (
            <Image
              source={require("../../assets/images/Home_a.png")}
              resizeMode="contain"
              style={{ width: wp(7), height: hp(4) }}
            />
          ) : (
            <Image
              source={require("../../assets/images/Home.png")}
              resizeMode="contain"
              style={{ width: wp(7), height: hp(4) }}
            />
          );
        } else if (route.name === "profile") {
          iconName = (
            <Image
              source={require("../../assets/images/Profile.png")}
              resizeMode="contain"
              style={{ width: wp(7), height: hp(4) }}
            />
          );
        } else if (route.name === "cart") {
          iconName = (
            <Image
              source={require("../../assets/images/Buy.png")}
              resizeMode="contain"
              style={{ width: wp(7), height: hp(4) }}
            />
          );
        } else if (route.name === "chat") {
          iconName = isFocused ? (
            <Image
              source={require("../../assets/images/Chat_a.png")}
              resizeMode="contain"
              style={{ width: wp(7), height: hp(4) }}
            />
          ) : (
            <Image
              source={require("../../assets/images/Chat.png")}
              resizeMode="contain"
              style={{ width: wp(7), height: hp(4) }}
            />
          );
        }

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const TabItem = isFocused ? LinearGradient : TouchableOpacity;
        const tabItemProps = isFocused
          ? {
              colors: Colors.light_green_gradient,
              style: [styles.tabItem, styles.tabItemFocused],
            }
          : { style: styles.tabItem, onPress: onPress };

        return (
          <TabItem key={index} {...tabItemProps}>
            {iconName}
            {isFocused && (
              <Text
                style={{
                  fontFamily: "inter_semiBold",
                  fontSize: wp(4),
                  textTransform: "capitalize",
                }}
              >
                {label}
              </Text>
            )}
          </TabItem>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    flexDirection: "row",
  },
  tabItemFocused: {
    borderRadius: wp(3),
    padding: wp(1),
    gap: wp(2),
    paddingHorizontal: wp(3),
  },
});

export default BottomTabBar;
