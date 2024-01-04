import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../constants";
import { hp, wp } from "../utils";
import { PrimaryButton } from "../components";

const SearchScreen = ({ navigation }) => {
  const [selectedFilters, setSelectedFilters] = useState([""]);
  const handlePress = (filter) => {
    if (selectedFilters.includes(filter)) {
      return setSelectedFilters(
        selectedFilters.filter((item) => item !== filter)
      );
    }

    setSelectedFilters([...selectedFilters, filter]);
  };
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Colors.light_white }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: hp(1),
        paddingTop: hp(5),
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
              activeOpacity={0.8}
              style={{
                backgroundColor: Colors.white,
                justifyContent: "center",
                alignItems: "center",
                padding: wp(1),
                borderRadius: wp(5),
                height: hp(6),
                aspectRatio: 1,
                elevation: 0.3,
              }}
            >
              <Feather name="bell" size={28} color={Colors.green_gradient[0]} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: wp(3),
          }}
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
            <TextInput
              placeholder=" What do you want to order?"
              placeholderTextColor={Colors.secondary300}
            />
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
        </View>

        <View style={{ gap: hp(2), marginVertical: hp(2) }}>
          <Text
            style={{
              fontFamily: "bold",
              fontSize: wp(5),
            }}
          >
            Type
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: wp(4),
              flexWrap: "wrap",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("Restaurant")
                  ? Colors.secondary400
                  : Colors.secondary100,
                borderRadius: wp(3),
                padding: wp(3),
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handlePress("Restaurant")}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                  color: selectedFilters.includes("Restaurant")
                    ? Colors.white
                    : Colors.secondary400,
                }}
              >
                Restaurant
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("Menu")
                  ? Colors.secondary400
                  : Colors.secondary100,
                borderRadius: wp(3),
                padding: wp(3),
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handlePress("Menu")}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                  color: selectedFilters.includes("Menu")
                    ? Colors.white
                    : Colors.secondary400,
                }}
              >
                Menu
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ gap: hp(2), marginVertical: hp(2) }}>
          <Text
            style={{
              fontFamily: "bold",
              fontSize: wp(5),
            }}
          >
            Location
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: wp(4),
              flexWrap: "wrap",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("1 Km")
                  ? Colors.secondary400
                  : Colors.secondary100,
                borderRadius: wp(3),
                padding: wp(3),
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handlePress("1 Km")}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                  color: selectedFilters.includes("1 Km")
                    ? Colors.white
                    : Colors.secondary400,
                }}
              >
                1 Km
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes(">10Km")
                  ? Colors.secondary400
                  : Colors.secondary100,
                borderRadius: wp(3),
                padding: wp(3),
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handlePress(">10Km")}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                  color: selectedFilters.includes(">10Km")
                    ? Colors.white
                    : Colors.secondary400,
                }}
              >
                {">10Km"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("<10Km")
                  ? Colors.secondary400
                  : Colors.secondary100,
                borderRadius: wp(3),
                padding: wp(3),
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handlePress("<10Km")}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                  color: selectedFilters.includes("<10Km")
                    ? Colors.white
                    : Colors.secondary400,
                }}
              >
                {"<10Km"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ gap: hp(2), marginVertical: hp(2) }}>
          <Text
            style={{
              fontFamily: "bold",
              fontSize: wp(5),
            }}
          >
            Food
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: wp(4),
              flexWrap: "wrap",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("Cake")
                  ? Colors.secondary400
                  : Colors.secondary100,
                borderRadius: wp(3),
                padding: wp(3),
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handlePress("Cake")}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                  color: selectedFilters.includes("Cake")
                    ? Colors.white
                    : Colors.secondary400,
                }}
              >
                Cake
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("Appetizer")
                  ? Colors.secondary400
                  : Colors.secondary100,
                borderRadius: wp(3),
                padding: wp(3),
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handlePress("Appetizer")}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                  color: selectedFilters.includes("Appetizer")
                    ? Colors.white
                    : Colors.secondary400,
                }}
              >
                Appetizer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("Main Course")
                  ? Colors.secondary400
                  : Colors.secondary100,
                borderRadius: wp(3),
                padding: wp(3),
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handlePress("Main Course")}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                  color: selectedFilters.includes("Main Course")
                    ? Colors.white
                    : Colors.secondary400,
                }}
              >
                Main Course
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("Soup")
                  ? Colors.secondary400
                  : Colors.secondary100,
                borderRadius: wp(3),
                padding: wp(3),
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handlePress("Soup")}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                  color: selectedFilters.includes("Soup")
                    ? Colors.white
                    : Colors.secondary400,
                }}
              >
                Soup
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("Dessert")
                  ? Colors.secondary400
                  : Colors.secondary100,
                borderRadius: wp(3),
                padding: wp(3),
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handlePress("Dessert")}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                  color: selectedFilters.includes("Dessert")
                    ? Colors.white
                    : Colors.secondary400,
                }}
              >
                Dessert
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexGrow: 1, justifyContent: "flex-end" }}>
        <PrimaryButton
          text={"Search"}
          onPress={() => {}}
          styles={{ marginBottom: hp(2) }}
          width={wp(90)}
        />
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

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
