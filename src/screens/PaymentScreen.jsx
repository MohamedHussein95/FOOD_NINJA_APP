import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackButton, Header } from "../components";
import { Colors } from "../constants";
import { hideCharacters, hp, wp } from "../utils";

const PaymentScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("paypal");

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
      <BackButton title={"Payment"} />

      <View style={{ paddingHorizontal: wp(4), flex: 1 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor:
              selectedMethod === "paypal"
                ? Colors.backgroundPrimary
                : Colors.white,
            borderWidth: selectedMethod === "paypal" ? 1 : 0,
            borderColor: selectedMethod === "paypal" ? Colors.success : null,
            borderRadius: wp(4),
            height: hp(10),
            marginVertical: hp(2),
            elevation: 1,
            paddingHorizontal: wp(4),
          }}
          onPress={() => setSelectedMethod("paypal")}
        >
          <Image
            source={require("../../assets/images/paypal.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text
            style={{
              fontFamily: "regular",
              fontSize: wp(4.5),
              letterSpacing: 0.5,
            }}
          >
            {hideCharacters("2121 6352 8465 4578", "end")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: wp(4),

            alignItems: "center",
            backgroundColor:
              selectedMethod === "visa"
                ? Colors.backgroundPrimary
                : Colors.white,
            borderWidth: selectedMethod === "visa" ? 1 : 0,
            borderColor: selectedMethod === "visa" ? Colors.success : null,
            borderRadius: wp(4),
            height: hp(10),
            marginVertical: hp(2),
            elevation: 1,
          }}
          onPress={() => setSelectedMethod("visa")}
        >
          <Image
            source={require("../../assets/images/visa.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text
            style={{
              fontFamily: "regular",
              fontSize: wp(4.5),
              letterSpacing: 0.5,
            }}
          >
            {hideCharacters("2121 6352 8465 4578", "end")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: wp(4),

            alignItems: "center",
            backgroundColor:
              selectedMethod === "Payoneer"
                ? Colors.backgroundPrimary
                : Colors.white,
            borderWidth: selectedMethod === "Payoneer" ? 1 : 0,
            borderColor: selectedMethod === "Payoneer" ? Colors.success : null,
            borderRadius: wp(4),
            height: hp(10),
            marginVertical: hp(2),
            elevation: 1,
          }}
          onPress={() => setSelectedMethod("Payoneer")}
        >
          <Image
            source={require("../../assets/images/Payoneer.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text
            style={{
              fontFamily: "regular",
              fontSize: wp(4.5),
              letterSpacing: 0.5,
            }}
          >
            {hideCharacters("2121 6352 8465 4578", "end")}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PaymentScreen;

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
  image: { aspectRatio: 1, width: wp(30) },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
