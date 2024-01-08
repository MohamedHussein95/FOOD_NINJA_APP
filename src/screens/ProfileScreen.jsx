import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useMemo, useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PrimaryButton } from "../components";
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

const ProfileScreen = ({ navigation }) => {
  // ref
  const bottomSheetRef = useRef();

  // variables
  const snapPoints = useMemo(() => ["50%", "75%", "90%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <View
        style={{
          backgroundColor: Colors.white,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: wp(5),
          padding: wp(2),
        }}
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
            justifyContent: "flex-end",

            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <PrimaryButton
            text={"Buy Again"}
            onPress={() => {}}
            styles={{}}
            width={wp(28)}
            height={hp(5)}
            fontSize={wp(3.5)}
          />
        </View>
      </View>
    ),
    []
  );

  // renders
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Photo_Profile.png")}
        resizeMode="cover"
        style={styles.image}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        animateOnMount
        initialSnap={0}
        backgroundStyle={{
          borderRadius: wp(10),
          backgroundColor: Colors.light_white,
        }}
        handleIndicatorStyle={{
          backgroundColor: Colors.backgroundPrimary,
          width: wp(15),
          height: hp(1),
        }}
      >
        <BottomSheetFlatList
          data={popularMenu}
          keyExtractor={(i) => i.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
          ListHeaderComponent={
            <View>
              <View
                style={{
                  backgroundColor: Colors.gold,
                  paddingHorizontal: wp(1),
                  paddingVertical: hp(1),
                  borderRadius: wp(3),
                  justifyContent: "center",
                  alignItems: "center",
                  width: wp(35),
                  marginVertical: hp(1),
                }}
              >
                <Text
                  style={{
                    fontFamily: "medium",
                    fontSize: wp(4),
                    color: Colors.gold200,
                  }}
                >
                  Member Gold
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ marginVertical: hp(1), gap: hp(1), flex: 1 }}>
                  <Text
                    style={{ fontFamily: "bold", fontSize: wp(6) }}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Anam Wusano
                  </Text>
                  <Text
                    style={{
                      fontFamily: "regular",
                      fontSize: wp(4),
                      color: Colors.black100,
                    }}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    anamwp66@gmail.com
                  </Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/Edit_Icon.png")}
                    resizeMode="contain"
                    style={{ height: hp(4), aspectRatio: 1 }}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: Colors.greyScale100,
                  paddingHorizontal: wp(5),
                  paddingVertical: hp(1),
                  borderRadius: wp(3),
                  gap: wp(4),
                  marginVertical: hp(2),
                }}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("voucher_promo")}
              >
                <Image
                  source={require("../../assets/images/Voucher_Icon.png")}
                  resizeMode="contain"
                  style={{ width: wp(15), aspectRatio: 1 }}
                />
                <Text
                  style={{
                    fontFamily: "inter_semiBold",
                    fontSize: wp(4),
                  }}
                >
                  You have 3 Vouchers
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "bold",
                  fontSize: wp(4),
                }}
              >
                Favorite
              </Text>
            </View>
          }
        />
      </BottomSheet>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: wp(4),
    gap: hp(2),
    paddingBottom: hp(12),
  },
  image: {
    width: "100%",
    height: "60%",
  },
});
