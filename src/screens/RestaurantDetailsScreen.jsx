import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useMemo, useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AirbnbRating, Rating } from "react-native-ratings";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const popularMenu = [
  {
    id: "1",
    image: require("../../assets/images/herbal_pancake.png"),
    title: "Herbal Pancake",
    time: "12 Mins",
  },
  {
    id: "2",
    image: require("../../assets/images/fruit_salad.png"),
    title: "Fruit Salad",
    time: "12 Mins",
  },
];

const RestaurantDetailsScreen = ({ navigation, route }) => {
  const { restaurant } = route.params || {};

  const bottomSheetRef = useRef();
  const snapPoints = useMemo(() => ["50%", "75%", "90%"], []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity
        style={{
          backgroundColor: Colors.greyScale100,
          borderRadius: wp(3),
          padding: wp(3),
          justifyContent: "center",
          alignItems: "center",
          width: wp(50),
          aspectRatio: 1,
        }}
        onPress={() => {}}
      >
        <Image
          source={item.image}
          resizeMode="contain"
          style={{ height: hp(15), aspectRatio: 1 }}
        />
        <Text
          style={{
            fontFamily: "bold",
            fontSize: wp(5),
            marginVertical: hp(1),
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontFamily: "regular",
            fontSize: wp(4),
            color: Colors.greyScale400,
          }}
        >
          {item.time}
        </Text>
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
        <View
          style={{
            paddingHorizontal: wp(4),
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: hp(1),
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: Colors.backgroundPrimary,
                borderRadius: wp(50),
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: wp(3),
                paddingVertical: hp(1),
              }}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                  color: Colors.success,
                }}
              >
                Popular
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: wp(4),
              }}
            >
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <LinearGradient
                  colors={Colors.light_green_gradient}
                  start={{ x: 1, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: hp(50),
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    width: wp(10),
                    aspectRatio: 1,
                  }}
                >
                  <Ionicons
                    name={"location"}
                    size={hp(3)}
                    color={Colors.success}
                  />
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <LinearGradient
                  colors={[Colors.light_red, Colors.light_red]}
                  start={{ x: 1, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: hp(50),
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    width: wp(10),
                    aspectRatio: 1,
                  }}
                >
                  <Ionicons name={"heart"} size={hp(3)} color={Colors.red} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginVertical: hp(1) }}>
            <Text
              style={{
                fontFamily: "bold",
                fontSize: wp(7),
              }}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {restaurant.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: wp(2),
              marginVertical: hp(1),
            }}
          >
            <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
              <Ionicons
                name={"location-outline"}
                size={hp(4)}
                color={Colors.success}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "regular",
                fontSize: wp(5),
                color: Colors.greyScale400,
                marginRight: wp(4),
              }}
            >
              19 Km
            </Text>
            <Rating
              imageSize={hp(3.5)}
              ratingCount={1}
              fractions={5}
              startingValue={0.5}
              size={hp(3)}
              showRating={false}
            />
            <Text
              style={{
                fontFamily: "regular",
                fontSize: wp(5),
                color: Colors.greyScale400,
              }}
            >
              4.8 Rating
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "book",
              fontSize: wp(5),
              lineHeight: hp(3),
              marginVertical: hp(1),
            }}
            numberOfLines={4}
            ellipsizeMode="tail"
          >
            Most whole Alaskan Red King Crabs get broken down into legs, claws,
            and lump meat. We offer all of these options as well in our online
            shop, but there is nothing like getting the whole
          </Text>
        </View>
        <View style={{ gap: hp(2), marginVertical: hp(1) }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: hp(1),
              paddingHorizontal: wp(4),
            }}
          >
            <Text style={{ flex: 1, fontFamily: "bold", fontSize: wp(5) }}>
              Popular Menu
            </Text>
            <Text
              style={{
                fontFamily: "book",
                fontSize: wp(4),
                color: Colors.secondary400,
              }}
            >
              View More
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", width: "100%", height: hp(25) }}>
          <BottomSheetFlatList
            data={popularMenu.slice(0, 3)}
            horizontal
            keyExtractor={(i) => i.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text
          style={{
            paddingHorizontal: wp(4),
            fontFamily: "bold",
            fontSize: wp(5),
            marginVertical: hp(1),
          }}
        >
          Testimonials
        </Text>
        <View style={{ paddingHorizontal: wp(4), gap: hp(2) }}>
          <View
            style={{
              backgroundColor: Colors.greyScale100,
              flexDirection: "row",
              gap: wp(3),
              padding: wp(3),
              borderRadius: wp(3),
            }}
          >
            <Image
              source={require("../../assets/images/chat_1.png")}
              resizeMode="contain"
              style={{ aspectRatio: 1, width: wp(18) }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                }}
              >
                Dianne Russel
              </Text>
              <Text
                style={{
                  fontFamily: "regular",
                  fontSize: wp(4),
                  color: Colors.greyScale400,
                  marginBottom: hp(2),
                }}
              >
                12 April 2021
              </Text>
              <Text
                style={{
                  fontFamily: "regular",
                  fontSize: wp(4),
                }}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                This Is great, So delicious! You Must Here, With Your family . .
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: hp(3),
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                flexDirection: "row",
                height: hp(3),
                position: "absolute",
                top: 10,
                right: 10,
              }}
              activeOpacity={0.8}
              onPress={() => {}}
            >
              <AirbnbRating
                size={wp(4)}
                showRating={false}
                defaultRating={5}
                unSelectedColor={Colors.greyScale400}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: Colors.greyScale100,
              flexDirection: "row",
              gap: wp(3),
              padding: wp(3),
              borderRadius: wp(3),
            }}
          >
            <Image
              source={require("../../assets/images/chat_1.png")}
              resizeMode="contain"
              style={{ aspectRatio: 1, width: wp(18) }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                }}
              >
                Dianne Russel
              </Text>
              <Text
                style={{
                  fontFamily: "regular",
                  fontSize: wp(4),
                  color: Colors.greyScale400,
                  marginBottom: hp(2),
                }}
              >
                12 April 2021
              </Text>
              <Text
                style={{
                  fontFamily: "regular",
                  fontSize: wp(4),
                }}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                This Is great, So delicious! You Must Here, With Your family . .
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: hp(3),
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                flexDirection: "row",
                height: hp(3),
                position: "absolute",
                top: 10,
                right: 10,
              }}
              activeOpacity={0.8}
              onPress={() => {}}
            >
              <AirbnbRating
                size={wp(4)}
                showRating={false}
                defaultRating={5}
                unSelectedColor={Colors.greyScale400}
              />
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  contentContainer: {
    paddingHorizontal: wp(4),
    gap: wp(2),
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: "60%",
  },
});
