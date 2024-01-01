import React, { useState } from "react";
import { Animated, Easing, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../constants";
import { wp } from "../utils";

const CustomSwitch = ({ size, onPress, status }) => {
  const initialAnimatedValue = status ? 32 * size : 0;
  const [animatedValue, setAnimatedValue] = useState(
    new Animated.Value(initialAnimatedValue)
  );

  const toggleHandle = () => {
    Animated.timing(animatedValue, {
      toValue: status ? 0 : 32 * size,
      duration: 250,
      easing: Easing.bounce,
      delay: 0,
      useNativeDriver: true,
    }).start();
    onPress();
  };

  return (
    <TouchableOpacity
      style={styles(size, status).container}
      onPress={() => toggleHandle()}
      activeOpacity={1}
    >
      <Animated.View
        style={[
          styles(size, status).toggle,
          {
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default CustomSwitch;

const styles = (size, status) =>
  StyleSheet.create({
    container: {
      backgroundColor: status ? Colors.success : Colors.greyScale300,
      height: 32 * size,
      width: 64 * size,
      borderRadius: wp(50),
      padding: 4 * size,
    },
    toggle: {
      height: 24 * size,
      width: 24 * size,
      backgroundColor: Colors.white,
      borderRadius: wp(50),
    },
  });
