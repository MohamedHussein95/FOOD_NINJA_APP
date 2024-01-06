import { FontAwesome5 } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { BackButton, Header } from "../components";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const popularMenu = [
  {
    id: "1",
    image: require("../../assets/images/herbal_pancake.png"),
    title: "Herbal Pancake",
    restaurant: "Warung Herbal",
    price: "$7",
  },
  {
    id: "2",
    image: require("../../assets/images/fruit_salad.png"),
    title: "Fruit Salad",
    restaurant: "Wijie Resto",
    price: "$5",
  },
  {
    id: "3",
    image: require("../../assets/images/green_noodle.png"),
    title: "Green Noodle",
    restaurant: "Noodle Home",
    price: "$15",
  },
];

const OrderDetailsScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.screen}>
      <Header />
      <FlatList
        data={popularMenu}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: hp(1),
          paddingTop: hp(8),
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<BackButton title={"Order details"} />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ width: "100%", paddingHorizontal: wp(4) }}>
            <Animated.View
              style={[
                {
                  backgroundColor: Colors.greyScale100,
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: wp(5),
                  padding: wp(2),
                  marginBottom: hp(2),
                },
              ]}
            >
              <Image
                source={item.image}
                resizeMode="contain"
                style={{ width: wp(20), aspectRatio: 1 }}
              />
              <View
                style={{
                  gap: hp(1),
                  marginLeft: wp(2),
                  flex: 1,
                }}
              >
                <Text style={{ fontFamily: "medium", fontSize: wp(5) }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontFamily: "regular",
                    fontSize: wp(4),
                    color: Colors.black100,
                  }}
                >
                  {item.restaurant}
                </Text>
                <MaskedView
                  style={{
                    width: 50,
                    height: 28,
                  }}
                  maskElement={
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "bold",
                          fontSize: wp(7),
                          color: Colors.success,
                        }}
                      >
                        {item.price}
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
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: wp(2),
                  marginRight: wp(1),
                }}
              >
                <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                  <LinearGradient
                    colors={Colors.light_green_gradient}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                      borderRadius: hp(1),
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                      width: wp(9),
                      aspectRatio: 1,
                    }}
                  >
                    <FontAwesome5
                      name="minus"
                      size={hp(2)}
                      color={Colors.green_gradient[0]}
                    />
                  </LinearGradient>
                </TouchableOpacity>
                <Text style={{ fontFamily: "inter_semiBold", fontSize: wp(5) }}>
                  9
                </Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                  <LinearGradient
                    colors={Colors.green_gradient}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                      borderRadius: hp(1),
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                      width: wp(9),
                      aspectRatio: 1,
                    }}
                  >
                    <FontAwesome5
                      name="plus"
                      size={hp(2)}
                      color={Colors.white}
                    />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        )}
      />
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
              borderRadius: wp(2),
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

export default OrderDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
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
