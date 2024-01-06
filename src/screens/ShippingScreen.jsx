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
import { hp, wp } from "../utils";

const ShippingScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

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
      <BackButton title={"Shipping"} />
      <View
        style={{
          backgroundColor: Colors.greyScale100,
          elevation: 0.3,
          marginHorizontal: wp(4),
          borderRadius: wp(4),
          paddingHorizontal: wp(3),
          marginBottom: hp(2),
          height: hp(15),
        }}
      >
        <View
          style={{
            marginTop: hp(3),
          }}
        >
          <Text
            style={{
              fontFamily: "regular",
              fontSize: wp(4.5),
              color: Colors.greyScale400,
            }}
          >
            Order Location
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: hp(1),
            gap: wp(3),
          }}
        >
          <Image
            source={require("../../assets/images/Pin_Logo.png")}
            resizeMode="contain"
            style={styles.image}
          />
          <Text
            style={{
              flex: 1,
              fontFamily: "medium",
              fontSize: wp(4),
              lineHeight: hp(3),
            }}
          >
            4517 Washington Ave. Manchester, Kentucky 39495
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.greyScale100,
          elevation: 0.3,
          marginHorizontal: wp(4),
          borderRadius: wp(4),
          paddingHorizontal: wp(3),
          marginBottom: hp(2),
        }}
      >
        <View
          style={{
            marginTop: hp(3),
          }}
        >
          <Text
            style={{
              fontFamily: "regular",
              fontSize: wp(4.5),
              color: Colors.greyScale400,
            }}
          >
            Deliver To
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: hp(1),
            gap: wp(3),
          }}
        >
          <Image
            source={require("../../assets/images/Pin_Logo.png")}
            resizeMode="contain"
            style={styles.image}
          />
          <Text
            style={{
              flex: 1,
              fontFamily: "medium",
              fontSize: wp(4),
              lineHeight: hp(3),
            }}
          >
            4517 Washington Ave. Manchester, Kentucky 39495
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.white,
            padding: wp(4),
            borderRadius: wp(4),
            justifyContent: "center",
            alignItems: "center",
            elevation: 0.2,
            marginVertical: hp(2),
          }}
        >
          <Text
            style={{
              fontFamily: "bold",
              fontSize: wp(4),
              color: Colors.green_gradient[0],
            }}
          >
            Set Location
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ShippingScreen;

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
  image: { aspectRatio: 1, width: wp(10) },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
