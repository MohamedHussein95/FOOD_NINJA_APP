import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { BackButton, Header, PrimaryButton } from "../components";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const PaymentMethodtScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

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
      <BackButton
        title={"Payment Method"}
        subtitle={
          "This data will be displayed in your account profile for security"
        }
      />

      <View style={{ paddingHorizontal: wp(4), flex: 1 }}>
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
            elevation: 1,
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
            elevation: 1,
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
        </TouchableOpacity>
      </View>
      <PrimaryButton
        text={"Next"}
        onPress={() => navigation.navigate("upload_photo")}
        styles={{ marginBottom: hp(2) }}
        disabled={selectedMethod.trim().length <= 0}
      />
    </ScrollView>
  );
};

export default PaymentMethodtScreen;

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
  image: { aspectRatio: 1, height: hp(15) },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
