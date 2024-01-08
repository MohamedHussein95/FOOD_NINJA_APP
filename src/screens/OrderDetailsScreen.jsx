import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { BackButton, Header } from "../components";
import { Colors } from "../constants";
import { DEVICE_WIDTH, hp, wp } from "../utils";

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

const renderHiddenItem = () => (
  <TouchableOpacity style={styles.rowBack}>
    <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
      <Ionicons name="trash" size={30} color={Colors.white} />
    </View>
  </TouchableOpacity>
);

const OrderDetailsScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.screen}>
      <Header />
      <SwipeListView
        data={popularMenu}
        disableRightSwipe
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={styles.contentContainer}
        useNativeDriver={true}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<BackButton title={"Order details"} />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ width: "100%", paddingHorizontal: wp(4) }}>
            <Animated.View style={styles.itemContainer}>
              <Image
                source={item.image}
                contentFit="contain"
                style={{ width: wp(20), aspectRatio: 1 }}
              />
              <View style={styles.middleView}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.restaurant}>{item.restaurant}</Text>
                <MaskedView
                  style={styles.maskContainer}
                  maskElement={
                    <View style={styles.priceMaskContainer}>
                      <Text style={styles.price}>{item.price}</Text>
                    </View>
                  }
                >
                  <LinearGradient
                    colors={Colors.green_gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.linearMask}
                  />
                </MaskedView>
              </View>
              <View style={styles.counterContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                  <LinearGradient
                    colors={Colors.light_green_gradient}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.minusButton}
                  >
                    <FontAwesome5
                      name="minus"
                      size={hp(2)}
                      color={Colors.green_gradient[0]}
                    />
                  </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.counterText}>9</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                  <LinearGradient
                    colors={Colors.green_gradient}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.plusButton}
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
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-DEVICE_WIDTH / 5}
      />
      <LinearGradient
        colors={Colors.green_gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.orderDetailsContainer}
      >
        <ImageBackground
          source={require("../../assets/images/Pattern_order.png")}
          contentFit="cover"
          style={styles.imageOrderBg}
        >
          <View style={styles.subDetailsView}>
            <Text style={styles.subDetailsTitle}>Sub-Total</Text>
            <Text style={styles.subDetailsValue}>$120</Text>
          </View>
          <View style={styles.subDetailsView}>
            <Text style={styles.subDetailsTitle}>Delivery Charge</Text>
            <Text style={styles.subDetailsValue}>$10</Text>
          </View>
          <View style={styles.subDetailsView}>
            <Text style={styles.subDetailsTitle}>Discount</Text>
            <Text style={styles.subDetailsValue}>$20</Text>
          </View>
          <View style={styles.totalView}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.totalValue}>$150</Text>
          </View>
          <TouchableOpacity
            style={styles.orderButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("confirm_order")}
          >
            <MaskedView
              style={styles.orderButtonMask}
              maskElement={
                <View style={styles.orderButtonInnerMask}>
                  <Text style={styles.orderButtonText}>Place My Order</Text>
                </View>
              }
            >
              <LinearGradient
                colors={Colors.green_gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.orderButtonGradient}
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
  orderButtonGradient: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  orderButtonText: {
    fontSize: wp(5),
    fontFamily: "bold",
    textAlign: "center",
  },
  orderButtonInnerMask: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  orderButtonMask: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  orderButton: {
    backgroundColor: Colors.white,
    padding: wp(2),
    borderRadius: wp(4),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: hp(7),
  },
  totalValue: {
    fontFamily: "medium",
    color: Colors.white,
    fontSize: wp(6),
    letterSpacing: 0.5,
  },
  total: {
    fontFamily: "medium",
    color: Colors.white,
    fontSize: wp(6),
    letterSpacing: 0.5,
  },
  totalView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: hp(2),
  },
  subDetailsValue: {
    fontFamily: "medium",
    color: Colors.white,
    fontSize: wp(5),
    letterSpacing: 0.5,
  },
  subDetailsTitle: {
    fontFamily: "medium",
    color: Colors.white,
    fontSize: wp(4),
    letterSpacing: 0.5,
  },
  subDetailsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageOrderBg: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  orderDetailsContainer: {
    width: "90%",
    alignSelf: "center",
    marginBottom: hp(2),
    borderRadius: hp(1),
    gap: hp(1),
  },
  plusButton: {
    borderRadius: hp(1),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: wp(9),
    aspectRatio: 1,
  },
  counterText: {
    fontFamily: "inter_semiBold",
    fontSize: wp(5),
  },
  minusButton: {
    borderRadius: hp(1),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: wp(9),
    aspectRatio: 1,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(2),
    marginRight: wp(1),
  },
  linearMask: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  priceMaskContainer: {
    width: "100%",
    height: "100%",
  },
  maskContainer: {
    width: 50,
    height: 28,
  },
  price: {
    fontFamily: "bold",
    fontSize: wp(7),
    color: Colors.success,
  },
  restaurant: {
    fontFamily: "regular",
    fontSize: wp(4),
    color: Colors.black100,
  },
  title: {
    fontFamily: "medium",
    fontSize: wp(5),
  },
  middleView: {
    gap: hp(1),
    marginLeft: wp(2),
    flex: 1,
  },
  itemContainer: {
    backgroundColor: Colors.greyScale100,
    flexDirection: "row",
    alignItems: "center",
    padding: wp(2),
    height: hp(12),
    borderRadius: wp(4),
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: hp(1),
    paddingTop: hp(8),
    gap: hp(1),
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  rowBack: {
    alignItems: "center",
    backgroundColor: "transparent",
    height: hp(10),
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 15,
    width: 80,
    alignSelf: "center",
    borderTopRightRadius: wp(10),
    borderBottomRightRadius: wp(10),
    marginRight: wp(4),
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
});
