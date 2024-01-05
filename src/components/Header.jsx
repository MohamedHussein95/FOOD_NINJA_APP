import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require("../../assets/images/Pattern_diagnol.png")}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
  },
  image: { aspectRatio: 2, width: "100%" },
});
