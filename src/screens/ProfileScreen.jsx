import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { wp, hp } from "../utils";
import { Colors } from "../constants";
import { PrimaryButton } from "../components";

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
  {
    id: "4",
    image: require("../../assets/images/herbal_pancake.png"),
    title: "Herbal Pancake",
    restaurant: "Warung Herbal",
    price: "$7",
  },
  {
    id: "5",
    image: require("../../assets/images/fruit_salad.png"),
    title: "Fruit Salad",
    restaurant: "Wijie Resto",
    price: "$5",
  },
  {
    id: "6",
    image: require("../../assets/images/green_noodle.png"),
    title: "Green Noodle",
    restaurant: "Noodle Home",
    price: "$15",
  },
  {
    id: "7",
    image: require("../../assets/images/herbal_pancake.png"),
    title: "Herbal Pancake",
    restaurant: "Warung Herbal",
    price: "$7",
  },
  {
    id: "8",
    image: require("../../assets/images/fruit_salad.png"),
    title: "Fruit Salad",
    restaurant: "Wijie Resto",
    price: "$5",
  },
  {
    id: "9",
    image: require("../../assets/images/green_noodle.png"),
    title: "Green Noodle",
    restaurant: "Noodle Home",
    price: "$15",
  },
];

const ProfileScreen = () => {
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
      <TouchableOpacity
        style={{
          backgroundColor: Colors.white,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: wp(5),
          padding: wp(2),
          width: "100%",
          justifyContent: "space-between",
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
          <Text
            style={{
              fontFamily: "bold",
              fontSize: wp(7),
              color: Colors.secondary400,
              marginRight: wp(3),
            }}
          >
            {item.price}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
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
      </TouchableOpacity>
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
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        animateOnMount
        initialSnap={1}
        backgroundStyle={{
          borderRadius: wp(10),
          backgroundColor: Colors.light_white,
        }}
        handleIndicatorStyle={{
          backgroundColor: Colors.secondary100,
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
            <>
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
              </View>
            </>
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
  },
  image: {
    width: "100%",
    height: "60%",
  },
});
