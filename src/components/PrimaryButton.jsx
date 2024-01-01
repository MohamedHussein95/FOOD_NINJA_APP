import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const PrimaryButton = ({ text, styles, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles]}>
      <LinearGradient
        colors={Colors.green_gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: hp(7),
          paddingHorizontal: wp(8),
          borderRadius: wp(3),
          overflow: "hidden",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "bold",
            fontSize: hp(3),
            color: Colors.white,
          }}
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
