import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const BackButton = ({ title, subtitle }) => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingHorizontal: wp(4) }}>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.backgroundPrimary,
          padding: wp(1),
          borderRadius: wp(3),
          width: wp(13),
          aspectRatio: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Octicons name="chevron-left" size={30} color={Colors.success} />
      </TouchableOpacity>
      {title && (
        <Text
          style={{
            fontFamily: "bold",
            fontSize: wp(7),
            lineHeight: hp(4),
            marginVertical: hp(4),
          }}
        >
          {title}
        </Text>
      )}
      {subtitle && (
        <Text
          style={{
            fontFamily: "book",
            fontSize: wp(4),
            lineHeight: hp(3),
            marginVertical: hp(0),
          }}
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
