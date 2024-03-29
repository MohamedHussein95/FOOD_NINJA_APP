import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header, PrimaryButton } from "../components";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

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
      style={{ flex: 1, backgroundColor: Colors.white }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: hp(1),
        paddingTop: hp(5),
      }}
      showsVerticalScrollIndicator={false}
    >
      <Header />
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
              flex: 1,
              paddingLeft: wp(4),
              backgroundColor: Colors.backgroundPrimary,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: wp(4),
              gap: wp(3),
              overflow: "hidden",
            }}
          >
            <Feather name="search" size={24} color={Colors.success} />
            <TextInput
              placeholder=" What do you want to order?"
              placeholderTextColor={Colors.success}
              style={{ flex: 1, height: hp(7) }}
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.backgroundPrimary,
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
              color={Colors.success}
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
                  ? Colors.success
                  : Colors.backgroundPrimary,
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
                    : Colors.success,
                }}
              >
                Restaurant
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("Menu")
                  ? Colors.success
                  : Colors.backgroundPrimary,
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
                    : Colors.success,
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
                  ? Colors.success
                  : Colors.backgroundPrimary,
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
                    : Colors.success,
                }}
              >
                1 Km
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes(">10Km")
                  ? Colors.success
                  : Colors.backgroundPrimary,
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
                    : Colors.success,
                }}
              >
                {">10Km"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("<10Km")
                  ? Colors.success
                  : Colors.backgroundPrimary,
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
                    : Colors.success,
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
                  ? Colors.success
                  : Colors.backgroundPrimary,
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
                    : Colors.success,
                }}
              >
                Cake
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("Appetizer")
                  ? Colors.success
                  : Colors.backgroundPrimary,
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
                    : Colors.success,
                }}
              >
                Appetizer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("Main Course")
                  ? Colors.success
                  : Colors.backgroundPrimary,
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
                    : Colors.success,
                }}
              >
                Main Course
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("Soup")
                  ? Colors.success
                  : Colors.backgroundPrimary,
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
                    : Colors.success,
                }}
              >
                Soup
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: selectedFilters.includes("Dessert")
                  ? Colors.success
                  : Colors.backgroundPrimary,
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
                    : Colors.success,
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
