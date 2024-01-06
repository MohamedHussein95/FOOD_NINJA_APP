import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackButton, Header } from "../components";
import { Colors } from "../constants";
import { hideCharacters, hp, wp } from "../utils";

const ConfirmOrderScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.screen}>
      <Header />
      <BackButton title={"Confirm Order"} />

      <View
        style={{
          backgroundColor: Colors.greyScale100,
          elevation: 0.3,
          marginHorizontal: wp(4),
          borderRadius: wp(4),
          alignItems: "center",
          paddingHorizontal: wp(3),
          marginBottom: hp(2),
          height: hp(15),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: hp(3),
          }}
        >
          <Text
            style={{
              flex: 1,
              fontFamily: "regular",
              fontSize: wp(4.5),
              color: Colors.greyScale400,
            }}
          >
            Deliver To
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("shipping")}>
            <Text
              style={{
                fontFamily: "regular",
                color: Colors.success,
                fontSize: wp(4.5),
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
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
          alignItems: "center",
          paddingHorizontal: wp(3),
          marginBottom: hp(2),
          height: hp(15),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: hp(3),
          }}
        >
          <Text
            style={{
              flex: 1,
              fontFamily: "regular",
              fontSize: wp(4.5),
              color: Colors.greyScale400,
            }}
          >
            Payment Method
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("payment")}>
            <Text
              style={{
                fontFamily: "regular",
                color: Colors.success,
                fontSize: wp(4.5),
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: hp(1),
            gap: wp(3),
            width: "100%",
          }}
        >
          <Image
            source={require("../../assets/images/paypal.png")}
            resizeMode="contain"
            style={{ width: wp(25), height: hp(5) }}
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
        </View>
      </View>
      <LinearGradient
        colors={Colors.green_gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          width: "90%",
          alignSelf: "center",
          marginBottom: hp(2),
          borderRadius: hp(1),
          gap: hp(1),
          position: "absolute",
          bottom: 0,
        }}
      >
        <ImageBackground
          source={require("../../assets/images/Pattern_order.png")}
          resizeMode="cover"
          style={{
            paddingHorizontal: wp(4),
            paddingVertical: hp(2),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "medium",
                color: Colors.white,
                fontSize: wp(4),
                letterSpacing: 0.5,
              }}
            >
              Sub-Total
            </Text>
            <Text
              style={{
                fontFamily: "medium",
                color: Colors.white,
                fontSize: wp(5),
                letterSpacing: 0.5,
              }}
            >
              $120
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "medium",
                color: Colors.white,
                fontSize: wp(4),
                letterSpacing: 0.5,
              }}
            >
              Delivery Charge
            </Text>
            <Text
              style={{
                fontFamily: "medium",
                color: Colors.white,
                fontSize: wp(5),
                letterSpacing: 0.5,
              }}
            >
              $10
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "medium",
                color: Colors.white,
                fontSize: wp(4),
                letterSpacing: 0.5,
              }}
            >
              Discount
            </Text>
            <Text
              style={{
                fontFamily: "medium",
                color: Colors.white,
                fontSize: wp(5),
                letterSpacing: 0.5,
              }}
            >
              $20
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: hp(2),
            }}
          >
            <Text
              style={{
                fontFamily: "medium",
                color: Colors.white,
                fontSize: wp(6),
                letterSpacing: 0.5,
              }}
            >
              Total
            </Text>
            <Text
              style={{
                fontFamily: "medium",
                color: Colors.white,
                fontSize: wp(6),
                letterSpacing: 0.5,
              }}
            >
              $150
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.white,
              padding: wp(2),
              borderRadius: wp(4),
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              height: hp(7),
            }}
            activeOpacity={0.8}
          >
            <MaskedView
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
              }}
              maskElement={
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: wp(5),
                      fontFamily: "bold",
                      textAlign: "center",
                    }}
                  >
                    Place My Order
                  </Text>
                </View>
              }
            >
              <LinearGradient
                colors={Colors.green_gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </MaskedView>
          </TouchableOpacity>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default ConfirmOrderScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: hp(8),
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  image: { aspectRatio: 1, width: wp(10) },
});
