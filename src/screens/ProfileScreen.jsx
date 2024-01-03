import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants";

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
