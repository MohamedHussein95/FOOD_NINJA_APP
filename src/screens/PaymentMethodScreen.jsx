import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants";
import { hp, wp } from "../utils";
import { PrimaryButton } from "../components";

const PaymentMethodtScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: hp(5),
          paddingTop: hp(4),
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/Pattern_diagnol.png")}
            style={styles.imagePattern}
            resizeMode="cover"
          />
        </View>

        <View style={{ paddingHorizontal: wp(3) }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.secondary100,
              padding: wp(1),
              borderRadius: wp(3),
              width: wp(13),
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Octicons
              name="chevron-left"
              size={30}
              color={Colors.secondary400}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "bold",
              fontSize: wp(7),
              lineHeight: hp(4),
              marginVertical: hp(4),
            }}
          >
            Payment Method
          </Text>
          <Text
            style={{
              fontFamily: "book",
              fontSize: wp(4),
              lineHeight: hp(3),
              marginVertical: hp(0),
            }}
          >
            This data will be displayed in your account profile for security
          </Text>

          <TouchableOpacity
            style={{
              justifyContent: "center",
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
            }}
            onPress={() => setSelectedMethod("paypal")}
          >
            <Image
              source={require("../../assets/images/paypal.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
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
            }}
            onPress={() => setSelectedMethod("visa")}
          >
            <Image
              source={require("../../assets/images/visa.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:
                selectedMethod === "Payoneer"
                  ? Colors.backgroundPrimary
                  : Colors.white,
              borderWidth: selectedMethod === "Payoneer" ? 1 : 0,
              borderColor:
                selectedMethod === "Payoneer" ? Colors.success : null,
              borderRadius: wp(4),
              height: hp(10),
              marginVertical: hp(2),
            }}
            onPress={() => setSelectedMethod("Payoneer")}
          >
            <Image
              source={require("../../assets/images/Payoneer.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <PrimaryButton
          text={"Next"}
          onPress={() => {}}
          styles={{ marginBottom: hp(2) }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentMethodtScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: Colors.light_white,
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { aspectRatio: 1, height: hp(15) },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
