import { Octicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackButton, Header, PrimaryButton } from "../components";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const UploadPhotoScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [imgUrl, setImgUrl] = useState("");

  const handleCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) return;
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.canceled) {
      handleImageChange(result.assets[0].uri);
    }
  };
  const handleGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.canceled) {
      handleImageChange(result.assets[0].uri);
    }
  };

  const handleImageChange = (localUri) => {
    setImgUrl(localUri);
    console.log(localUri);
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: hp(1),
        paddingTop: hp(8),
      }}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <BackButton
        title={"Upload Your Photo Profile"}
        subtitle={
          "This data will be displayed in your account profile for security"
        }
      />

      <View style={{ paddingHorizontal: wp(4), flex: 1 }}>
        {imgUrl ? (
          <View
            style={{
              width: wp(80),
              aspectRatio: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              marginTop: hp(5),
              overflow: "hidden",
              borderRadius: wp(5),
            }}
          >
            <Image
              source={{ uri: imgUrl }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: Colors.light_white,
                opacity: 0.5,
                padding: wp(1),
                borderRadius: wp(100),
                width: wp(10),
                aspectRatio: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => setImgUrl("")}
            >
              <Octicons name="x" size={24} color={Colors.white} />
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.white,
                borderRadius: wp(4),
                height: hp(18),
                gap: hp(2),
                marginVertical: hp(2),
                elevation: 1,
              }}
              onPress={handleGallery}
            >
              <Image
                source={require("../../assets/images/Gallery.png")}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={{ fontFamily: "bold", fontSize: wp(4) }}>
                From Gallery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.white,

                borderRadius: wp(4),
                height: hp(18),
                gap: hp(2),
                marginVertical: hp(2),
                elevation: 1,
              }}
              onPress={handleCamera}
            >
              <Image
                source={require("../../assets/images/camera.png")}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={{ fontFamily: "bold", fontSize: wp(4) }}>
                From Camera
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <PrimaryButton
        text={"Next"}
        onPress={() => navigation.navigate("set_location")}
        styles={{ marginBottom: hp(2) }}
        disabled={imgUrl.trim().length <= 0}
      />
    </ScrollView>
  );
};

export default UploadPhotoScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.light_white,
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { aspectRatio: 1, height: hp(10) },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
