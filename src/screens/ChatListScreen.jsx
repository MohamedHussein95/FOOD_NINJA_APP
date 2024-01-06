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

const Chats = [
  {
    id: "1",
    image: require("../../assets/images/chat_1.png"),
    fullName: "Anamwp",
    lastMessage: "Your Order Just Arrived!",
    time: "20:00",
  },
  {
    id: "2",
    image: require("../../assets/images/chat_2.png"),
    fullName: "Guy Hawkins",
    lastMessage: "Your Order Just Arrived!",
    time: "20:00",
  },
  {
    id: "3",
    image: require("../../assets/images/chat_3.png"),
    fullName: "Leslie Alexander",
    lastMessage: "Your Order Just Arrived!",
    time: "20:00",
  },
];

const ChatListScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.screen}>
      <Header />
      <FlatList
        data={Chats}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: hp(1),
          paddingTop: hp(8),
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<BackButton title={"Chat"} />}
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
            onPress={() => navigation.navigate("chat", { user: item })}
          >
            <Image
              source={item.image}
              resizeMode="contain"
              style={{ width: wp(15), aspectRatio: 1 }}
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
                {item.fullName}
              </Text>
              <Text
                style={{
                  fontFamily: "regular",
                  fontSize: wp(4),
                  color: Colors.greyScale500,
                }}
              >
                {item.lastMessage}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "regular",
                fontSize: wp(4),
                color: Colors.black100,
                marginRight: wp(3),
                position: "absolute",
                top: 15,
                right: 10,
              }}
            >
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChatListScreen;

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
