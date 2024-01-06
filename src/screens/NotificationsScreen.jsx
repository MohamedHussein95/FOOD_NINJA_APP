import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackButton, Header } from "../components";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const Notifications = [
  {
    id: "1",
    image: require("../../assets/images/order_taken.png"),
    title: "Your order has been taken by the driver",
    time: "recently",
  },
  {
    id: "2",
    image: require("../../assets/images/top_up.png"),
    title: "Topup for $100 was successful",
    time: "10:00 Am",
  },
  {
    id: "3",
    image: require("../../assets/images/order_canceled.png"),
    title: "Your order has been canceled",
    time: "22 july 2023",
  },
];

const NotificationsScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.screen}>
      <Header />
      <FlatList
        data={Notifications}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: hp(1),
          paddingTop: hp(8),
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<BackButton title={"Notifications"} />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.greyScale100,
              borderRadius: wp(4),
              padding: wp(4),
              gap: wp(4),
              marginBottom: hp(2),
              marginHorizontal: wp(4),
            }}
            activeOpacity={0.7}
          >
            <Image
              source={item.image}
              resizeMode="contain"
              style={{ width: wp(10), aspectRatio: 1 }}
            />
            <View
              style={{
                gap: hp(1),
                width: "85%",
              }}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: wp(4),
                  lineHeight: hp(2.5),
                }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontFamily: "regular",
                  fontSize: wp(4),
                  color: Colors.black100,
                }}
              >
                {item.time}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NotificationsScreen;

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
