import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomCarousel from "../components/CustomCarousel";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const NearestRestaurants = [
  {
    id: "1",
    image: require("../../assets/images/veganRes.png"),
    title: "Vegan Resto",
    time: "12 Mins",
  },
  {
    id: "2",
    image: require("../../assets/images/healthyRes.png"),
    title: "Healthy Food",
    time: "8 Mins",
  },
];
const popularRestaurants = [
  {
    id: "1",
    image: require("../../assets/images/smartRestoRes.png"),
    title: "Vegan Resto",
    time: "12 Mins",
  },
  {
    id: "2",
    image: require("../../assets/images/GoodFoodRes.png"),
    title: "Healthy Food",
    time: "8 Mins",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: hp(12),
        paddingTop: hp(8),
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

      <View style={{ paddingHorizontal: wp(4) }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "bold",
              fontSize: wp(8),
              lineHeight: hp(5),
              marginVertical: hp(4),
              width: "60%",
            }}
          >
            Find Your Favorite Food
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                justifyContent: "center",
                alignItems: "center",
                padding: wp(1),
                borderRadius: wp(5),
                height: hp(6),
                aspectRatio: 1,
              }}
            >
              <Feather name="bell" size={28} color={Colors.green_gradient[0]} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: wp(3) }}
        >
          <View
            style={{
              paddingHorizontal: wp(4),
              flex: 1,
              backgroundColor: Colors.secondary100,
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: hp(2),
              borderRadius: wp(4),
              gap: wp(3),
              height: hp(7),
            }}
          >
            <Feather name="search" size={24} color={Colors.secondary400} />
            <Text
              style={{
                fontFamily: "inter_semiBold",
                color: Colors.secondary300,
                fontSize: wp(4),
              }}
            >
              What do you want to order?
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.secondary100,
              justifyContent: "center",
              alignItems: "center",
              padding: wp(1),
              borderRadius: wp(5),
              height: hp(7),
              aspectRatio: 1,
            }}
          >
            <MaterialCommunityIcons
              name="tune-variant"
              size={24}
              color={Colors.secondary400}
            />
          </View>
        </TouchableOpacity>
      </View>

      <CustomCarousel />

      <View style={{ gap: hp(2), marginTop: hp(1) }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: hp(1),
            paddingHorizontal: wp(4),
          }}
        >
          <Text style={{ flex: 1, fontFamily: "bold", fontSize: wp(5) }}>
            Nearest Restaurant
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
        <FlatList
          data={NearestRestaurants}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            gap: wp(3),
            paddingHorizontal: wp(4),
          }}
          style={{ flex: 1 }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                borderRadius: wp(3),
                padding: wp(3),
                justifyContent: "center",
                alignItems: "center",
                width: wp(50),
                aspectRatio: 1,
              }}
            >
              <Image
                source={item.image}
                resizeMode="contain"
                style={{ height: hp(15), aspectRatio: 1 }}
              />
              <Text style={{ flex: 1, fontFamily: "bold", fontSize: wp(5) }}>
                {item.title}
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontFamily: "regular",
                  fontSize: wp(4),
                  color: Colors.black100,
                }}
              >
                {item.time}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{ gap: hp(2), marginTop: hp(1) }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: hp(1),
            paddingHorizontal: wp(4),
          }}
        >
          <Text style={{ flex: 1, fontFamily: "bold", fontSize: wp(5) }}>
            Popular Restaurant
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
        <FlatList
          data={popularRestaurants}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            gap: wp(3),
            paddingHorizontal: wp(4),
          }}
          style={{ flex: 1 }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                borderRadius: wp(3),
                padding: wp(3),
                justifyContent: "center",
                alignItems: "center",
                width: wp(50),
                aspectRatio: 1,
              }}
            >
              <Image
                source={item.image}
                resizeMode="contain"
                style={{ height: hp(15), aspectRatio: 1 }}
              />
              <Text style={{ flex: 1, fontFamily: "bold", fontSize: wp(5) }}>
                {item.title}
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontFamily: "regular",
                  fontSize: wp(4),
                  color: Colors.black100,
                }}
              >
                {item.time}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
