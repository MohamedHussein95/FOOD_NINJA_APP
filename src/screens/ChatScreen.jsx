import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, logoStyles } from ".././constants";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import MaskedView from "@react-native-masked-view/masked-view";

import { BackButton, Header, PrimaryButton } from "../components";
import colors from "../constants/colors";
import { hp, wp } from "../utils";

const ChatScreen = ({ navigation, route }) => {
  const { user } = route.params || {};
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Pattern.png")}
          style={styles.imagePattern}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", colors.white]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "40%",
          }}
        />
      </View>

      <FlatList
        data={[]}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: hp(12),
          paddingTop: hp(5),
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <BackButton title={"Chat"} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Colors.white,
                borderRadius: wp(4),
                padding: wp(4),
                gap: wp(4),
                marginBottom: hp(2),
                marginHorizontal: wp(4),
                elevation: 0.5,
                borderWidth: 0.5,
                borderColor: Colors.greyScale100,
              }}
              activeOpacity={0.7}
            >
              <Image
                source={user.image}
                resizeMode="contain"
                style={{ width: wp(15), aspectRatio: 1 }}
              />
              <View
                style={{
                  flex: 1,
                  gap: hp(0.5),
                }}
              >
                <Text
                  style={{
                    fontFamily: "medium",
                    fontSize: wp(4),
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {user.fullName}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: wp(1),
                  }}
                >
                  <LinearGradient
                    colors={Colors.green_gradient}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      aspectRatio: 1,
                      width: wp(2),
                      borderRadius: wp(50),
                      overflow: "hidden",
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "regular",
                      fontSize: wp(4),
                      color: Colors.black100,
                    }}
                  >
                    Online
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("call")}
              >
                <LinearGradient
                  colors={Colors.light_green_gradient}
                  start={{ x: 1, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: wp(50),
                    overflow: "hidden",
                    width: wp(10),
                    aspectRatio: 1,
                  }}
                >
                  <FontAwesome name="phone" size={24} color={Colors.success} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </>
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <></>}
      />
    </View>
  );
};

export default ChatScreen;

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
  imagePattern: { width: "100%", height: hp(40) },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
