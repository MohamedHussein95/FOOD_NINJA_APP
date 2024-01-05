import { Octicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackButton, Header, PrimaryButton } from "../components";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const PROMOTIONS = [
  {
    id: "1",
    image: require("../../assets/images/ice_cream.png"),
    imageBg: require("../../assets/images/advertising_bg.png"),
    title: "Special Deal For January",
  },
];

const VoucherPromoScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <FlatList
        data={PROMOTIONS}
        showsHorizontalScrollIndicator={false}
        style={styles.screen}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: hp(1),
          paddingTop: hp(8),
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<BackButton title={"Voucher Promo"} />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.imageBg}
            style={{
              overflow: "hidden",
              elevation: 1,
              borderRadius: wp(5),
              marginBottom: hp(2),
              marginHorizontal: wp(4),
            }}
          >
            <TouchableOpacity
              activeOpacity={0.9}
              style={{
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
                height: hp(25),
              }}
              onPress={() => navigation.navigate("voucher_promo")}
            >
              <Image
                source={item.image}
                resizeMode="cover"
                style={{
                  position: "absolute",
                  left: 0,
                  height: "100%",
                  width: wp(100),
                }}
              />
              <View
                style={{
                  width: "60%",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  gap: hp(2),
                  position: "absolute",
                  right: -8,
                }}
              >
                <Text
                  style={{
                    fontFamily: "bold",
                    fontSize: wp(6),
                    color: Colors.white,
                    lineHeight: hp(5),
                    marginHorizontal: wp(4),
                  }}
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    width: "100%",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.white,
                      padding: wp(2),
                      borderRadius: wp(2),
                      width: wp(35),
                      justifyContent: "center",
                      alignItems: "center",
                      height: hp(8),
                      marginHorizontal: wp(13),
                    }}
                    activeOpacity={0.8}
                  >
                    <MaskedView
                      style={{
                        width: "100%",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      maskElement={
                        <View
                          style={{
                            width: "100%",
                            height: "100%",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: wp(5),
                              fontFamily: "bold",
                              textAlign: "center",
                            }}
                          >
                            Buy Now
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
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        )}
      />
      <View style={{ flex: 1, flexGrow: 1, justifyContent: "flex-end" }}>
        <PrimaryButton
          text={"Check out"}
          onPress={() => {}}
          styles={{ marginBottom: hp(2) }}
          width={wp(90)}
        />
      </View>
    </>
  );
};

export default VoucherPromoScreen;

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
