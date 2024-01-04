import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Pattern_diagnol.png")}
          style={styles.imagePattern}
          resizeMode="cover"
        />
      </View>
      <FlatList
        data={Chats}
        showsHorizontalScrollIndicator={false}
        style={styles.screen}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: hp(1),
          paddingTop: hp(8),
          paddingHorizontal: wp(4),
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.secondary100,
                padding: wp(1),
                borderRadius: wp(3),
                width: wp(13),
                aspectRatio: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.goBack()}
            >
              <Octicons
                name="chevron-left"
                size={30}
                color={Colors.secondary400}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "bold",
                fontSize: wp(7),
                lineHeight: hp(4),
                marginVertical: hp(4),
              }}
            >
              Chat
            </Text>
          </>
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.white,
              borderRadius: wp(4),
              padding: wp(4),
              gap: wp(4),
              marginBottom: hp(2),
            }}
            activeOpacity={0.7}
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
                  color: Colors.black100,
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
    </>
  );
};

export default ChatListScreen;

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
